import {AfterViewInit, Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-gift-voucher',
  templateUrl: './gift-voucher.component.html',
  styleUrls: ['./gift-voucher.component.css']
})
export class GiftVoucherComponent implements AfterViewInit {

  public giftVoucherForm = this.fb.group({
    name: [null, Validators.required],
    subject: [Validators.required]
  });

  constructor(public fb: FormBuilder, private meta: Meta, private titleService: Title) {
    this.titleService.setTitle('Gift Voucher - Cedar Driving School');
    this.meta.updateTag({name: 'description', content: 'Gift Voucher'}, 'name=description');
  }

  prices = [
    {
      lesson_type: "1 Hour",
      price: "35"
    },
    {
      lesson_type: "1.5 Hours",
      price: "50"
    },
    {
      lesson_type: "6 Hours",
      price: "190"
    },
    {
      lesson_type: "12 Hours",
      price: "350"
    }
  ];

  ngAfterViewInit() {

  }

}
