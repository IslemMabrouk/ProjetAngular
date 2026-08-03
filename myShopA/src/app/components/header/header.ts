import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
title:string="My Shop";


getConnectedUser(){
  const user =JSON.parse(localStorage.getItem('connectedUser') || 'null');
  return user
}

}
