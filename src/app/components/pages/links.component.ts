import {Component} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'links',
  templateUrl: './links.component.html'
})
export class LinksComponent {

  constructor(private meta: Meta, private titleService: Title) {
    this.titleService.setTitle('Links - Cedar Driving School');
    // this.meta.updateTag({name: 'description', content: this.lessons.map(elem => elem.toLowerCase()).map(elem => elem.charAt(0).toUpperCase() + elem.slice(1)).join('. ')}, 'name=description');
  }

}
