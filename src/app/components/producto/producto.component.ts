import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoModel } from '../../models/producto.model';
import { Subscription } from 'rxjs';
import { ProductoService } from '../../services/producto.service';
import { CommonModule } from '@angular/common';
import { PaymentMethodComponent } from '../payment-method/payment-method.component';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [CommonModule, PaymentMethodComponent],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css',
})
export class ProductoComponent implements OnInit, OnDestroy {
  slug: string | undefined;
  producto: ProductoModel | undefined;
  productoSub: Subscription | undefined;

  galeria: Array<any> = [];

  currentImg: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private productoService: ProductoService
  ) {}

  ngOnInit(): void {
    this.slug = this.route.snapshot.params['id'];
    console.log(this.slug);

    this.productoSub = this.productoService.getProducto().subscribe({
      next: (productos: ProductoModel[]) => {
        this.producto = productos.filter((p) => p.slug === this.slug)[0];
        this.currentImg = this.producto.imageUrl[0];
        console.log(this.producto);
      },
      error: (err: any) => {
        console.error('Error', err);
      },
    });
  }
  ngOnDestroy(): void {
    this.productoSub?.unsubscribe();
  }
}
