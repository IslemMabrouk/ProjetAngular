import { Component, inject } from '@angular/core';
import { ProductCard } from "../product-card/product-card";
import { ProductService } from '../../services/product-service';

@Component({
  selector: 'app-products',
  imports: [ProductCard],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  private productService = inject(ProductService)
products:any[] = []

ngOnInit(){
// this.products = JSON.parse(localStorage.getItem('products') || '[]');
this.productService.getAllProducts().subscribe({
      next :(res: any) => {
        console.log(res);
        
      this.products = res;
    },
    error : (err) => {
      console.log(err);
      alert("Erreur récupération de la liste des prooduits")
    }
  })
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
