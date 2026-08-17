import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {

  private cartService = inject(CartService);

  get cart() {
    return this.cartService.cart();
  }

  removeFromCart(productId: number) {
    this.cartService.removeFromCart(productId);
  }

  getTotal() {
    return this.cart.reduce(
      (total, item) => total + item.product.price,
      0
    );
  }

  clearCart() {
  this.cartService.clearCart();
}
}