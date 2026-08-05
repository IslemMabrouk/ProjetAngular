import { Component, inject } from '@angular/core';
import { ProductCard } from "../product-card/product-card";
import { ProductService } from '../../services/product-service';
import { map, Subject } from 'rxjs';

@Component({
  selector: 'app-products',
  imports: [ProductCard],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  private productService = inject(ProductService)
products:any[] = []
filteredProducts:any[]=[];

searchSubject = new Subject<string>();

ngOnInit(){
// this.products = JSON.parse(localStorage.getItem('products') || '[]');
this.loadProduct();

this.searchSubject.pipe(
  map(value =>
    this.products.filter(product=>
      product.name.toLowerCase().includes(value.toLocaleLowerCase())
    )
  )
).subscribe(result => {
  this.filteredProducts =result;
})
}

loadProduct(){
this.productService.getAllProducts().subscribe({
      next :(res: any) => {
        console.log(res);
        
      this.products = res;
      this.filteredProducts=res;
    },
    error : (err) => {
      console.log(err);
      alert("Erreur récupération de la liste des prooduits")
    }
  })
}

search(value:string){
  this.searchSubject.next(value);
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
