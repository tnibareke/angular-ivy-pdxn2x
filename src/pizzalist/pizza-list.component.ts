import { Component, OnInit } from '@angular/core';

import { Pizza } from '../pizza';

@Component({
  selector: 'app-pizzalist',
  templateUrl: './pizzalist.component.html',
  styleUrls: ['./pizzalist.component.css'],
})
export class PizzalistComponent implements OnInit {
  nospizza: Pizza[] = [];

  constructor() {
    this.nospizza = [
      new Pizza(
        'marguerita',
        'https://img.freepik.com/photos-gratuite/vue-dessus-pizza-au-pepperoni-saucisses-aux-champignons-poivron-olive-mais-bois-noir_141793-2158.jpg?w=2000',
        'une pizza de bonne qualité'
      ),
      new Pizza(
        'Italiana',
        'https://media.gettyimages.com/photos/vegetarian-pizza-on-a-green-background-pizza-primavera-and-just-one-picture-id1209615781?k=20&m=1209615781&s=612x612&w=0&h=KFB33ITL4P-1Q67unqYR0k3UZ5Vu7EbXrnlqTdJ9lNk=',
        'une pizza bon prix'
      ),
    ];

    for (let idx = 0; idx < this.nospizza.length; idx++) {
      console.log(`Element at index ${idx} is ${this.nospizza[idx]}`);
    }
  }
  ngOnInit() {}
}
