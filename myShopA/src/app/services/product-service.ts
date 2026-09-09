import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  //Destination /Adresse
  productURL: string = 'http://localhost:3000/api/products'

  //Livreur
  private httpClient = inject(HttpClient)

  //Reponse : Tableau des objs (Liste des produits)
  // getAllProducts() {
  //   return this.httpClient.get<any[]>(this.productURL).pipe(
  //     map(products => {
  //       return products.map(product=>{
          //Modifier directement la valeur de l'attribut
          // product.name = product.name.toUpperCase();
          // return product;
        // })
      // })
    // );
  // }

  getAllProducts(){
    return this.httpClient.get<any[]>(this.productURL)
    .pipe (
      map(products =>
        products.map(product =>({
          ...product,
          nameProd : product.name.toUpperCase(),
          priceWithTax: product.price * 1.19,
          isAvailable: product.stock > 0
        }))
      )
    )
  }

  //Reponse : string , boolean/ produitObj + id (auto generé)
  addProduct(productObj: any) {
    return this.httpClient.post(this.productURL, productObj);
  }

  //Reponse : productObj || null
  getProductById(id: any) {
    // return this.httpClient.get(`${this.productURL}/${id}`);
    return this.httpClient.get(this.productURL + '/' + id);
  }

  //Reponse : string || boolean
  deleteProductById(id:any){
    return this.httpClient.delete(this.productURL + '/' + id)
  }

  //Reponse : String || boolean || productObj + id 
  updateProduct(productObj:any){
    return this.httpClient.put(this.productURL + "/" + productObj.id, productObj);
  }

  
}
