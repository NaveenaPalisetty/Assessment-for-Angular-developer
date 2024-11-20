import { Component } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private cartService: CartService) {}

  onAddToCart(product: any) {
    this.cartService.addItem(product);
  }
}
