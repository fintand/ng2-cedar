import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  // move key to environment files
  stripe = Stripe('pk_test_Hyie67X0mutAXg61rGO0OzuE');

  constructor() { }
}
