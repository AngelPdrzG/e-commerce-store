import { Component } from '@angular/core';
import { ProductoListComponent } from '../producto-list/producto-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductoListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
