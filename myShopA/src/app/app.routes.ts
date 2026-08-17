import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Products } from './components/products/products';
import { About } from './components/about/about';
import { Dashboard } from './components/dashboard/dashboard';
import { AddProduct } from './components/add-product/add-product';
import { SignUp } from './components/sign-up/sign-up';
import { Login } from './components/login/login';
import { ProductDetails } from './components/product-details/product-details';
import { adminGuardGuard } from './guards/admin-guard-guard';
import { Cart } from './components/cart/cart';

export const routes: Routes = [
    {path: '', component:Home},
    {path: 'products', component:Products},
    {path: 'about', component:About},
    {path: 'dashboard', component:Dashboard, canActivate:[adminGuardGuard]},
    {path: 'addProduct', component:AddProduct, canActivate:[adminGuardGuard]},
    {path: 'editProduct/:id', component:AddProduct, canActivate:[adminGuardGuard]},
    {path: 'signup', component:SignUp},
    {path: 'login', component:Login},
    {path: 'productDetails/:id', component:ProductDetails},
    {path: 'cart', component:Cart}
    
];
