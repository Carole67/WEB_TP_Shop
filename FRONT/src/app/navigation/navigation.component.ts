import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  nbProducts: number;

  constructor(private store: Store) {
    this.store.select(state => state.cart.cart).subscribe(u => this.nbProducts = u.length);
  }

  ngOnInit() {
  }

}
