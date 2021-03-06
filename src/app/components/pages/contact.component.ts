import { Component, AfterViewInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Http, URLSearchParams } from "@angular/http";
import * as swal from "sweetalert";
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styles: [
    '[disabled] { cursor: not-allowed; opacity: .65; box-shadow: none; }',
    '.has-error input, .has-error textarea, .has-error select{ border-color: #a94442; }'
  ]
})
export class ContactComponent implements AfterViewInit {

  private url = 'https://e8vp7z2t90.execute-api.eu-west-1.amazonaws.com/dev/contact';

  public enquiryForm = this.fb.group({
    name: [null, Validators.required],
    number: ["", Validators.required],
    email: [""],
    subject: ["", Validators.required],
    message: ["", Validators.maxLength(250)]
  });

  constructor(public fb: FormBuilder, private http: Http, private meta: Meta, private titleService: Title) {
    this.titleService.setTitle('Contact - Cedar Driving School');
    this.meta.updateTag({name: 'description', content: 'Contact Us or Call Us.'}, 'name=description');
  }

  subjects = ["General Enquiry", "Driving Lessons", "EDT Lessons", "Pre-Test", "Motorway Lessons", "Parking Lessons", "Theory Test Course", "Submit Feedback"];

  params: URLSearchParams = new URLSearchParams();

  sendForm(captchaResponse) {
    console.log(this.enquiryForm.value);
    let {name, number, message, subject, email} = this.enquiryForm.value;
    this.params.set('name', name);
    this.params.set('number', number);
    this.params.set('message', message);
    this.params.set('subject', subject);
    this.params.set('email', email);
    this.params.set('captchaResponse', captchaResponse);
    console.log(this.params);
    this.postForm(this.params);
  }

  postForm(obj) {
    this.http.post(this.url + '?' + obj.toString(), {}).subscribe(
      (data) =>  {
        this.enquiryForm.reset();
        swal({
          title: "Sent!",
          text: "Thanks for your message, a member of our team will be with you shortly.",
          allowOutsideClick: true,
          type: "success",
          confirmButtonColor: ''
        })
      }
    );
  }

  resolved(captchaResponse: string) {
    this.sendForm(captchaResponse);
  }

  ngAfterViewInit() {

  }

}
