import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product-service';

@Component({
  selector: 'app-add-product',
  imports: [FormsModule],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css',
})
export class AddProduct {
  private acivatedroute = inject(ActivatedRoute);
  private productService = inject(ProductService);

products:any[]=[];
product= {
  id: 0,
  name:'',
  price:'',
  description:'',
  img:''
}
productID!:number;
isEditMode = false;

ngOnInit(){
  //Récupérer les données du localstorage
// this.products = JSON.parse(localStorage.getItem('products') || '[]');

this.productID = Number(this.acivatedroute.snapshot.paramMap.get('id'));
console.log(this.productID );

if (this.productID) {
  this.isEditMode = true;
  // this.product = this.products.find((p:any) => p.id === this.productID);
  this.productService.getProductById(this.productID).subscribe({
    next : (res:any) => {
      this.product =res;
    },
    error : (err) => {
      console.log(err);
    }
  })
}

}

  addOrEditProduct(productForm: NgForm) {
    if (this.isEditMode) {
      // Enregistrer les modifs
      // localStorage.setItem('products', JSON.stringify(this.products));
      this.productService.updateProduct(this.product).subscribe({
        next : (res:any) => {
          alert("Produit Modifié avec Succès!");
        },
        error : (err) => {
          console.log(err);
          alert("Erreur modification produit"); 
        }
      })
    } else {
      this.productService.addProduct(productForm.value).subscribe({
         next : (res:any) => {
          alert("Produit Ajouté avec Succès!");
          productForm.reset();
        },
        error : (err) => {
          console.log(err);
          alert("Erreur ajout produit"); 
        }
      })
      // Générer un id
      // this.product.id = Date.now();
      // this.product.id = this.products.length+1;
      //Ajouter le nouveau produit
      // this.products.push(this.product);
      //Sauvegarde dans localstorage
      // localStorage.setItem('products', JSON.stringify(this.products));
      // alert("Produit ajouté!");
      // productForm.resetForm();
    }
  }


}
