import { Component } from '@angular/core';
import {Title, Meta} from "@angular/platform-browser";

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  constructor(private meta: Meta, private titleService: Title) {
    this.titleService.setTitle('Cedar Driving School - EDT Lessons, Driving Lessons');
    this.meta.updateTag({name: 'description', content: 'Cedar Driving School was established in 1972 in Dublin. Our ' +
    'fully qualified RSA and ADI instructors boast over 20 years’ experience in driving instruction and testing' +
    ' in Ireland.'}, 'name=description');
  }

}
