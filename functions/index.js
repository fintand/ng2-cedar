// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.contact = functions.https.onRequest((req, res) => {
  // data from user
  const spam = req.query.company;
  const name = req.query.name;
  const number = req.query.number;
  const subject = req.query.subject;
  const user_message = req.query.message;
  const email = req.query.email;
  const captchaResponse = req.query.captchaResponse;




  return res.json({hello: name})
});
