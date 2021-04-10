import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  contacts = [
    {
      name: 'Ing. arch. Dávid Chaľ',
      position: 'Architekt'

    },
    {

    }
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
