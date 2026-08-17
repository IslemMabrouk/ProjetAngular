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


  addToCart(productObj: any) {

  this.cart.update(products => {

    // Chercher si le produit existe déjà
    const existingProduct = products.find(
      product => product.product.id === productObj.id
    );

    let newCart;

    if (existingProduct) {

      // Le produit existe → augmenter la quantité
      newCart = products.map(product => {

        if (product.product.id === productObj.id) {
          return {
            ...product,
            quantity: product.quantity + 1
          };
        }

        return product;
      });

    } else {

      // Nouveau produit → quantité = 1
      newCart = [
        ...products,
        {
          product: productObj,
          quantity: 1
        }
      ];
    }

    localStorage.setItem(
      "cart",
      JSON.stringify(newCart)
    );

    return newCart;
  });
}

  cartCount = computed(() => {
  return this.cart().reduce(
    (total, item) => total + item.quantity,
    0
  );
});


  removeFromCart(id:number){

    this.cart.update(products=>{


      const newCart =
      products.filter(
        product=>product.id!==id
      );


      localStorage.setItem(
        "cart",
        JSON.stringify(newCart)
      );


      return newCart;


    });


  }



  clearCart(){

    this.cart.set([]);

    localStorage.removeItem("cart");

  }
}
