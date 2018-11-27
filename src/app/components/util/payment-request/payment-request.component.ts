import {AfterViewInit, Component, Input, ViewChild} from '@angular/core';
import {PaymentService} from "../../../service/payment.service";
import {AngularFireAuth} from "angularfire2/auth";
import {AngularFirestore} from "angularfire2/firestore";
import StripePaymentRequest = stripe.paymentRequest.StripePaymentRequest;
import Elements = stripe.elements.Elements;
import Element = stripe.elements.Element;

@Component({
  selector: 'payment-request',
  templateUrl: './payment-request.component.html',
  styleUrls: ['./payment-request.component.css']
})
export class PaymentRequestComponent implements AfterViewInit {

  @Input() amount: number;
  @Input() label: string;

  elements: Elements;
  paymentRequest: StripePaymentRequest;
  prButton: Element;
  card: any;
  canMakePayment: boolean = false;
  isInitialising: boolean = true; // use this for a loading spinner

  @ViewChild('payElement') payElement;
  @ViewChild('cardInfo') cardInfo;

  userId: string;

  constructor(private pmt: PaymentService, private auth: AngularFireAuth, private db: AngularFirestore) {
    this.auth.authState.subscribe((auth) => {
      if(auth) this.userId = auth.uid;
    })
  }

  ngAfterViewInit(): void {


    // 1. instantiate a paymentRequest object
    this.paymentRequest = this.pmt.stripe.paymentRequest({
      country: 'IE',
      currency: 'eur',
      total: {
        amount: this.amount,
        label: this.label,
      },
      requestPayerName: true,
      requestPayerEmail: true
    });

    // Check if we can use the Payment Request API TODO: May not need this
    this.paymentRequest.canMakePayment().then(res => {
      this.canMakePayment = Boolean(res);
      console.log('canMakePayment:resolve', this.canMakePayment)
    }).catch(e => {
      console.log('canMakePayment:reject', e)
    });

    // 2. initalize elements
    this.elements = this.pmt.stripe.elements();


    // 3. register listener
    this.paymentRequest.on('token', async (event) => {
      console.log(event)

      this.processPayment(event.token, this.amount);

      // Fires when the user submits their card
      // Make an HTTP call to charge on the backend (using a timeout to simulate the response)
      setTimeout(() => {
        event.complete('success')
      }, 1000)
    })



    // 4. create the button
    this.prButton = this.elements.create('paymentRequestButton', {
      paymentRequest: this.paymentRequest,
      style: {
        paymentRequestButton: {
          height: '100px',
          theme: 'dark',
          type: 'buy'
        }
      }
    });

    const style = {
      base: {
        color: '#32325d',
        lineHeight: '18px',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#aab7c4'
        }
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a'
      }
    };

    this.card = this.elements.create('card', { style });

    // 5. mount the button asynchronously
    this.mountButton()
  }

  // Form submission Event Handler
  async handleForm(e) {
    e.preventDefault();
    const { token, error } = await this.pmt.stripe.createToken(this.card, {

    });
    console.log(token, error)
    if(!error) {
      this.processPayment(token, this.amount);
    }
    // const res = await this.fun
    //   .httpsCallable('startSubscription')({ source: token.id })
    //   .toPromise();
  }

  async mountButton() {
    const result = await this.paymentRequest.canMakePayment();
    console.log('mountButton', result)

    if (result) {
      this.prButton.mount(this.payElement.nativeElement);
      // this.card.mount(this.payElement.nativeElement);

    } else {
      this.card.mount(this.cardInfo.nativeElement);
      console.log('Payment Request API not supported.')
    }

  }

  // me messing around
  processPayment(token: any, amount: number) {
    const payment = { token, amount };
    return this.db.collection(`payments`).add(payment);
  }

}
