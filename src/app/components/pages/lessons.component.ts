import {Component} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'lessons',
  templateUrl: './lessons.component.html'
})
export class LessonsComponent {

  constructor(private meta: Meta, private titleService: Title) {
    this.titleService.setTitle('Lessons - Cedar Driving School');
    this.meta.updateTag({name: 'description', content: this.lessons.map(elem => elem.toLowerCase()).map(elem => elem.charAt(0).toUpperCase() + elem.slice(1)).join('. ')}, 'name=description');
  }

  private lessons = [
    "CAR CONTROLS AND SAFETY CHECKS",
    "CORRECT POSITIONING",
    "CHANGING DIRECTION",
    "PROGRESSION MANAGEMENT",
    "CORRECT POSITIONING",
    "ANTICIPATION AND REACTION",
    "SHARING THE ROAD",
    "DRIVING SAFELY THROUGH TRAFFIC",
    "CHANGING DIRECTION (MORE COMPLEX SITUATIONS)",
    "SPEED MANAGEMENT",
    "DRIVING CALMLY",
    "NIGHT DRIVING",
  ];

}
