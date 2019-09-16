import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}
  todo = {
    title: '',
    description: ''
  };
  logForm(form) {
    console.log(form.value)
  }

}
