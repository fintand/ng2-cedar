import { Component, AfterViewInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import * as swal from 'sweetalert';
import { Meta, Title } from '@angular/platform-browser';
import { HttpClient, HttpParams } from '@angular/common/http';

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
    number: ['', Validators.required],
    email: [''],
    subject: ['', Validators.required],
    message: ['', Validators.maxLength(250)]
  });

  constructor(public fb: FormBuilder, private http: HttpClient, private meta: Meta, private titleService: Title) {
    this.titleService.setTitle('Contact - Cedar Driving School');
    this.meta.updateTag({name: 'description', content: 'Contact Us or Call Us.'}, 'name=description');
  }

  subjects = ['General Enquiry', 'Driving Lessons', 'EDT Lessons', 'Pre-Test', 'Motorway Lessons', 'Parking Lessons', 'Theory Test Course', 'Submit Feedback'];

  sendForm(captchaResponse) {
    console.log(this.enquiryForm.value);
    let {name, number, message, subject, email} = this.enquiryForm.value;
    const params = new HttpParams()
      .set('name', name)
      .set('number', number)
      .set('message', message)
      .set('subject', subject)
      .set('email', email)
      .set('captchaResponse', captchaResponse);
    console.log(params);
    this.postForm(params);
  }

  postForm(obj) {
    this.http.post(this.url + '?' + obj.toString(), {}).subscribe(
      (data) => {
        this.enquiryForm.reset();
        swal({
          title: 'Sent!',
          text: 'Thanks for your message, a member of our team will be with you shortly.',
          allowOutsideClick: true,
          type: 'success',
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
