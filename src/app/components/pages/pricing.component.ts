import { Component } from '@angular/core';

@Component({
  selector: 'pricing',
  templateUrl: './pricing.component.html'
})
export class PricingComponent {

  constructor() {}

  prices = [
    {
      lesson_type: "Lesson / Pre-Test / EDT per hour",
      price: "30.00"
    },
    {
      lesson_type: "Lesson + Pre-Test (2 Hours)",
      price: "55.00"
    },
    {
      lesson_type: "Pre-Test Video Recorded (Free SD Card provided)",
      price: "35.00"
    },
    {
      lesson_type: "3 Lessons",
      price: "80.00"
    },
    {
      lesson_type: "6 Lessons",
      price: "160"
    },
    {
      lesson_type: "12 EDT Lessons (mandatory from 04-04-2011)",
      price: "300"
    },
    {
      lesson_type: "1 Hour Warm Up + Car Hire",
      price: "100"
    },
    {
      lesson_type: "2 Hour Warm Up + Car Hire",
      price: "120"
    }
  ]

}
