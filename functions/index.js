const functions = require('firebase-functions');
const admin = require('firebase-admin');
const mailgun = require('mailgun-js')({apiKey: functions.config().mailgun.apikey, domain: functions.config().mailgun.domain});
const QRCode = require('qrcode');
const path = require('path');
const fs = require('fs')

admin.initializeApp(functions.config().firebase);

const stripe = require('stripe')(functions.config().stripe.testkey);

const db = functions.firestore;

exports.stripeCharge = db
  .document('/payments/{paymentId}')
  .onCreate((snap, context) => {
    console.log(snap.data());
    console.log(context.params.paymentId);

    const payment = snap.data();
    const paymentId = context.params.paymentId;

    // checks if payment exists or if it has already been charged
    if(!payment || payment.charge) return;


    // charge the card
    const amount = payment.amount;
    const idempotency_key = paymentId;
    const source = payment.token.id;
    const currency = 'eur';
    const receipt_email = payment.token.email;
    const charge = {amount, currency, receipt_email, source};

    return stripe.charges.create(charge, { idempotency_key }).then((resp) => {
      let hasCharged = false;

      if(resp.status === 'succeeded') {
        hasCharged = true;

        // send email here

        QRCode.toFile('/tmp/code.png', paymentId)
          .then(err => {

            const attach = new mailgun.Attachment({data: fs.readFileSync('/tmp/code.png'), filename: 'gift-voucher-code.png'});

            const data = {
              from: 'Brian <brian@cedardrivingschool.ie>',
              to: receipt_email,
              subject: 'Gift voucher',
              text: paymentId,
              attachment: attach
            };

            mailgun.messages().send(data, function (error, body) {
              console.log(body);
            });

          })
          .catch(err => {
            console.error(err)
          });
      }



      return admin.firestore().collection('/payments').doc(paymentId).set({charge: hasCharged}, { merge: true })
    })

  });
