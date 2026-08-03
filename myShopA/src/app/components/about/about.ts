import { DatePipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [UpperCasePipe, LowerCasePipe, DatePipe],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
actualeDate: Date = new Date();
}
