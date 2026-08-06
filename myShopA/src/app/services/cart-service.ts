import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart = signal<any[]>([]);


  constructor(){
    const savedCart = localStorage.getItem("cart");

    if (savedCart) {
      this.cart.set(JSON.parse(savedCart));
    }
  }


  addToCart(productObj:any){

    //Ajouter le nouveau produit
    this.cart.update(products =>{

      const newCart = [
        ...products,
        productObj
      ];

      localStorage.setItem("cart", JSON.stringify(newCart));

      return newCart;
    });
  }

  cartCount = computed(()=>{
    return this.cart().length;
  });
}
