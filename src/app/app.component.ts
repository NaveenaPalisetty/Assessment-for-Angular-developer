import { Component } from '@angular/core';
import { CartService } from './cart.service';
import { CartComponent } from './cart.component';
import { ProductCategoryComponent } from './product-category.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductCategoryComponent, CartComponent], // Import the standalone components
  templateUrl: './app.component.html',
  styleUrls: ['./src/styles.css'],
})
export class AppComponent {
  constructor(private cartService: CartService) {}

  onAddToCart(product: any) {
    this.cartService.addItem(product);
  }
}
