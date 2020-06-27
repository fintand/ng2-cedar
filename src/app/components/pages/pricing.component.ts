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
      title: 'EDT Course',
      subtitle: '12 hours',
      price: 400,
      content: ['Essential Driver Training Package', '12 lessons', 'RSA, ADI Approved']
    },
    {
      title: 'Individual Lesson',
      subtitle: '1 hour',
      price: 38,
      content: [ 'EDT lesson', 'RSA, ADI Approved']
    },
    {
      title: 'Practice Lesson',
      subtitle: '1 hour',
      price: 35,
      content: ['Non-EDT practice lesson', 'RSA, ADI Approved']
    }
  ];
}
