import { Component, Input, OnInit } from '@angular/core';
import { ProductoModel } from '../../models/producto.model';
import { PercentPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'producto-item',
  standalone: true,
  imports: [PercentPipe, RouterLink],
  templateUrl: './producto-item.component.html',
  styleUrl: './producto-item.component.css',
})
export class ProductoItemComponent implements OnInit {
  @Input() producto: ProductoModel | undefined;

  ngOnInit(): void {
    console.log(this.producto);
  }
}
