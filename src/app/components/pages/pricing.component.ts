import { Component } from '@angular/core';

@Component({
  selector: 'pricing',
  templateUrl: './pricing.component.html'
})
export class PricingComponent {

  constructor() {}

  prices = [
    {
      lesson_type: "Lesson | Pre-Test | EDT per hour",
      price: "30.00"
    },
    {
      lesson_type: "6 Lessons",
      price: "170"
    },
    {
      lesson_type: "12 EDT Lessons",
      price: "320"
    }
  ]

}
