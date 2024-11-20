import { Component } from '@angular/core';
import { CartService } from './cart.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  imports: [FormsModule],  // Add FormsModule here
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cartItems = this.cartService.getCartItems();

  constructor(private cartService: CartService) {}

  updateItemCount(index: number, quantity: number) {
    this.cartService.updateQuantity(index, quantity);
  }

  removeItems(index: number) {
    this.cartService.removeItem(index);
  }

  buyproductsNow() {
    console.log(JSON.stringify(this.cartItems));
  }
}
