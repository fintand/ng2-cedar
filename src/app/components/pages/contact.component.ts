import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Http, URLSearchParams } from "@angular/http";
import {log} from "util";


@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styles: [
    '[disabled] { cursor: not-allowed; opacity: .65; box-shadow: none; }',
    '.has-error input, .has-error textarea, .has-error select{ border-color: #a94442; }'
  ]
})
export class ContactComponent {

  // private url = 'http://localhost:3000/api/contact';
  // private url = 'https://jsonplaceholder.typicode.com';
  private url = 'https://e8vp7z2t90.execute-api.eu-west-1.amazonaws.com/dev/contact';

  public enquiryForm = this.fb.group({
    name: [null, Validators.required],
    number: ["", Validators.required],
    email: [null],
    subject: ["", Validators.required],
    message: ["", Validators.maxLength(250)]
  });

  constructor(public fb: FormBuilder, private http: Http) {}

  subjects = ["General Enquiry", "Driving Lessons", "EDT Lessons", "Pre-Test", "Motorway Lessons", "Parking Lessons", "Theory Test Course", "Submit Feedback"];

  params: URLSearchParams = new URLSearchParams();

  sendForm(event) {
    console.log(event);
    console.log(this.enquiryForm.value);
    let {name, number, message, subject} = this.enquiryForm.value;
    this.params.set('name', name);
    this.params.set('number', number);
    this.params.set('message', message);
    this.params.set('subject', subject);

    this.postForm(this.params);
  }

  postForm(obj) {
    console.log(obj.toString())
    this.http.post(this.url + '?' + obj.toString(), {}).subscribe(
      (data) => console.log(data)
    );
  }

}
