import { Component } from '@angular/core';
import {Title, Meta} from "@angular/platform-browser";

@Component({
  selector: 'services',
  templateUrl: './services.component.html'
})
export class ServicesComponent {

  constructor(private meta: Meta, private titleService: Title) {
    this.titleService.setTitle('Services - Cedar Driving School');
    this.meta.updateTag({name: 'description', content: 'RSA and ADI approved instructors. ' +
    'Pre-test, EDT and motorway driving courses. Lessons available 7 days a week'}, 'name=description');
  }

  services = [
    "RSA and ADI approved instructors",
    "Pre-test, EDT and motorway driving courses",
    "Lessons available 7 days a week",
    "School car available for lessons and driving test (Opel Corsa with dual controls)",
    "Door to door pick up and drop off available",
    "Discounted student rates",
    "Discounts available for block booking",
    "Gift vouchers available!",
  ]

}
