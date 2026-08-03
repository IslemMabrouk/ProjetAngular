import { Component } from '@angular/core';
import { ProductCard } from "../product-card/product-card";
import { TransformPipe } from '../../pipes/transform-pipe';
import { ReversePipePipe } from '../../pipes/reverse-pipe';

@Component({
  selector: 'app-products',
  imports: [ProductCard, TransformPipe, ReversePipePipe],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
products:any[] = []

ngOnInit(){
this.products = JSON.parse(localStorage.getItem('products') || '[]');
}


onDeleteProduct(id:number){
console.log("Hello form product.ts", id);
// Supprimer le produit
  let products = this.products.filter((product: any) => product.id !== id);
  // Mettre à jour le localStorage
  localStorage.setItem('products', JSON.stringify(products));
  // Mettre à jour la liste affiché dans le composant
  this.products = products;

}

}
