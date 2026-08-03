import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product-service';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {
private activatedRoute = inject(ActivatedRoute);
private productServcie = inject(ProductService);

productID!:number;
products:any[]=[];
product:any={};


ngOnInit(){
  this.productID = Number(this.activatedRoute.snapshot.paramMap.get('id'));

  this.productServcie.getProductById(this.productID).subscribe({
    next : (res:any) => {
      this.product = res;
    },
    error : (err) => {
      console.log(err);
    },
  })

  //Utilisation du localStorage
  // this.products = JSON.parse(localStorage.getItem('products') || '[]');
  // this.product = this.products.find((p:any) => p.id == this.productId);
  
}

}
