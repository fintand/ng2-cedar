import { Component, AfterViewInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Http, URLSearchParams } from "@angular/http";
import * as swal from "sweetalert";

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styles: [
    '[disabled] { cursor: not-allowed; opacity: .65; box-shadow: none; }',
    '.has-error input, .has-error textarea, .has-error select{ border-color: #a94442; }'
  ]
})
export class ContactComponent  implements AfterViewInit {

  // private url = 'http://localhost:3000/api/contact';
  // private url = 'https://jsonplaceholder.typicode.com';
  private url = 'https://e8vp7z2t90.execute-api.eu-west-1.amazonaws.com/dev/contact';

  public enquiryForm = this.fb.group({
    name: [null, Validators.required],
    number: ["", Validators.required],
    email: [""],
    subject: ["", Validators.required],
    message: ["", Validators.maxLength(250)]
  });

  constructor(public fb: FormBuilder, private http: Http) {}

  subjects = ["General Enquiry", "Driving Lessons", "EDT Lessons", "Pre-Test", "Motorway Lessons", "Parking Lessons", "Theory Test Course", "Submit Feedback"];

  params: URLSearchParams = new URLSearchParams();

  sendForm(event, captchaResponse) {
    console.log(this.enquiryForm.value);
    let {name, number, message, subject, email} = this.enquiryForm.value;
    this.params.set('name', name);
    this.params.set('number', number);
    this.params.set('message', message);
    this.params.set('subject', subject);
    this.params.set('email', email);
    this.params.set('captchaResponse', captchaResponse);
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

  resolved(captchaResponse: string, e: any) {
    this.sendForm(e, captchaResponse);
  }

  ngAfterViewInit() {

  }

}
