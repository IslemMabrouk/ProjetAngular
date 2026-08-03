import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product-service';

@Component({
  selector: 'app-products-table',
  imports: [],
  templateUrl: './products-table.html',
  styleUrl: './products-table.css',
})
export class ProductsTable {
  private router = inject(Router);
  private productService = inject(ProductService);

  products: any[] = [];

  ngOnInit() {
    // this.products = JSON.parse(localStorage.getItem('products') || '[]');
    this.loadProducts();
  }

  loadProducts(){
     this.productService.getAllProducts().subscribe({
      next :(res: any) => {
      this.products = res;
    },
    error : (err) => {
      console.log(err);
      alert("Erreur récupération de la liste des prooduits")
    }
  })
  }

  goToProductDetails(id: number) {
    this.router.navigate(['/productDetails', id]);
  }

  goToEditProduct(id: number) {
    this.router.navigate(['/editProduct', id]);
  }

  deleteProduct(id: number) {

    this.productService.deleteProductById(id).subscribe({
      next: (res: any) => {
        this.loadProducts();
        alert("Pdoruit Supprimé avec succès!")
      },
      error: (err) => {
        console.log(err);
        alert("Erreur Supprimer un produit");
      }
    })

    //Utilisation du localstorage
    // let productsTable = this.products.filter((p:any) => p.id !== id);
    //Mettre à jour le localstorge
    // localStorage.setItem('products', JSON.stringify(productsTable));
    //Mettre à jour le tableau affiché dns le comp
    // this.products = productsTable;
  }

  getPriceStyle(price: number) {

    if (price <= 10) {
      return { color: 'blue' };
    } else if (price <= 25) {
      return { color: 'green', 'font-weight': 'bold' };
    } else {
      return { color: 'red' };
    }

  }

}
