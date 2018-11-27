import { Injectable } from '@angular/core';
import Stripe = stripe.Stripe;

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  // move key to environment files
  stripe: Stripe = Stripe('pk_test_Hyie67X0mutAXg61rGO0OzuE');

  constructor() { }
}
