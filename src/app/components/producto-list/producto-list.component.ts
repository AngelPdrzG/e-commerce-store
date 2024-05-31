import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductoItemComponent } from '../producto-item/producto-item.component';
import { ProductoService } from '../../services/producto.service';
import { ProductoModel } from '../../models/producto.model';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'producto-list',
  standalone: true,
  imports: [ProductoItemComponent, CommonModule],
  templateUrl: './producto-list.component.html',
  styleUrl: './producto-list.component.css',
})
export class ProductoListComponent implements OnInit, OnDestroy {
  producto: ProductoModel[] = [];
  productoSub: Subscription | undefined;

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.productoSub = this.productoService.getProducto().subscribe({
      next: (producto: any) => {
        this.producto = producto;
        console.log(this.producto);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('asdasd');
      },
    });
  }
  ngOnDestroy(): void {
    this.productoSub?.unsubscribe();
  }
}
