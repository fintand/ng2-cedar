import {Component, Input, OnInit} from '@angular/core';
import * as swal from "sweetalert";
import {Angulartics2} from "angulartics2";

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

  constructor(private angulartics2: Angulartics2) { }

  ngOnInit() {

  }

  buyNow(title) {
    swal('Thank you for your interest, online payments are coming soon!');
    this.angulartics2.eventTrack.next({
      action: title,
      properties: { category: 'Pricing' },
    });
  }

}
