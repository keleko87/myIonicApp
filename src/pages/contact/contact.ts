import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  users;

  constructor(public navCtrl: NavController, private http: HttpClient) {
    this.http.get('https://randomuser.me/api?results=10').subscribe((users) => {
      console.log(users);
      this.users = users['results'];
    });
  }

}
