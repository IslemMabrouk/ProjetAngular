import { Component, inject } from '@angular/core';
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
    private router = inject(Router);

title:string="My Shop";


getConnectedUser(){
  const user =JSON.parse(localStorage.getItem('connectedUser') || 'null');
  return user
}

logOut(){
   localStorage.removeItem('connectedUser');
  this.router.navigate(['/login']);
}

}
