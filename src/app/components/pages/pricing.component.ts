import { Component } from '@angular/core';
import {Title, Meta} from "@angular/platform-browser";

@Component({
  selector: 'pricing',
  templateUrl: './pricing.component.html'
})
export class PricingComponent {

  constructor(private meta: Meta, private titleService: Title) {
    this.titleService.setTitle('Pricing - Cedar Driving School');
    this.meta.updateTag({name: 'description', content: 'Lessons, Pre-Test, EDT per hour. 6 Lessons. 12' +
    ' EDT Lessons'}, 'name=description');
  }

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
