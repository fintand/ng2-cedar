import {Component} from '@angular/core';
import {Title, Meta} from '@angular/platform-browser';

@Component({
  selector: 'pricing',
  templateUrl: './pricing.component.html'
})
export class PricingComponent {

  constructor(private meta: Meta, private titleService: Title) {
    this.titleService.setTitle('Pricing - Cedar Driving School');
    this.meta.updateTag({
      name: 'description', content: 'Lessons, Pre-Test, EDT per hour. 6 Lessons. 12' +
        ' EDT Lessons'
    }, 'name=description');
  }

  prices1 = [
    {
      title: 'Lesson',
      subtitle: '1 hour',
      price: 35,
      content: ['RSA, ADI Approved', 'Door-to-door pickup']
    },
    {
      title: 'Lesson',
      subtitle: '1.5 hours',
      price: 50,
      content: ['RSA, ADI Approved', 'Door-to-door pickup']
    }
  ];

  prices2 = [
    {
      title: 'Lesson',
      subtitle: '6 hours',
      price: 190,
      content: ['RSA, ADI Approved', 'Door-to-door pickup']
    },
    {
      title: 'Lesson',
      subtitle: '12 hours',
      price: 370,
      content: ['RSA, ADI Approved', 'Door-to-door pickup']
    }
  ];
}
