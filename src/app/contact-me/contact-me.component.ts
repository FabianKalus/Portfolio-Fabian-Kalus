import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent {
  constructor(private http: HttpClient) { }

  endpoint = "https://fabian-kalus.developerakademie.net/portfolio-app/assets/sendMail.php";


  submitReport: string = '';
  submitComplete = false;

  onSubmit(myForm: NgForm) {
    if (myForm.valid) {
      this.sendForm(myForm);
    }
  }

  sendForm(form: any) {
    this
      .http
      .post(this.endpoint, form.value)
      .subscribe(
        response => this.handleResponse(response, form),
        error => this.handleError(error, form)
      );
  }

  handleResponse(response: any, form: any) {
    console.log(response);
    this.submitReport = "Thank up for your Contact. I will replay as soon as possible!";
    this.submitComplete = true;
    form.reset();
  }

  handleError(error: any, form: any) {
    console.log(error);
    this.submitReport = "Error occure while sending your message! You can contact me directly on E-Mail: mustafaguer@outlook.com.";
    this.submitComplete = true;
    form.reset();
  }

  // public sendMail() {
  //   alert('your email was send');
  // }

  closeCard() {
    this.submitComplete = false;
    this.submitReport = '';
  }

}
