import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: any[] = [];

  //adding item according to user selection of items
  addItem(product: any) {
    const existingProduct = this.cartItems.find(
      (item) => item.id === product.id
    );
    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      this.cartItems.push({ ...product, quantity: 1 });
    }
  }

  //retrieving items
  getCartItems() {
    return this.cartItems;
  }

  //updating items based on addition of items
  updateQuantity(index: number, quantity: number) {
    if (quantity <= 0) {
      this.cartItems.splice(index, 1);
    } else {
      this.cartItems[index].quantity = quantity;
    }
  }

  //removal of items using index of specific item
  removeItem(index: number) {
    this.cartItems.splice(index, 1);
  }
}
