import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  private router = inject(Router);

  @Input() productInput:any;
  @Output() deleteProd = new EventEmitter;

  delete(id:number){
    this.deleteProd.emit(id);
  }

  goToProductDetails(id:any){
    this.router.navigate(['/productDetails', id]);
  }

}
