import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
})
export class ProductCategoryComponent {
  @Output() addToCart = new EventEmitter<any>();

  //sample list of items
  productItems = [
    {
      id: 1,
      name: 'Cheese Burger',
      price: 400,
      description: 'sample description related to cheese burger',
    },
    {
      id: 2,
      name: 'Chicken Burger',
      price: 600,
      description: 'sample description related to chicken burger',
    },
    {
      id: 3,
      name: 'Beef Burger',
      price: 300,
      description: 'sample description related to beef burger',
    },
  ];

  //adding to cart & emiting to its parent component
  onAddToCart(product: any) {
    this.addToCart.emit(product);
  }
}
