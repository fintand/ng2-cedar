import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'pricing-info',
  templateUrl: './pricing-info.component.html',
  styleUrls: ['./pricing-info.component.css']
})
export class PricingInfoComponent implements OnInit {

  @Input() title: string;
  @Input() subtitle: string;
  @Input() price: string;
  @Input() content: string[];

  constructor() { }

  ngOnInit() {

  }

}
