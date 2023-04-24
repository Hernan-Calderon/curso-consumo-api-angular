import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: Product={
    id:"",
    title:"",
    price:0,
    images:[],
    description:"",
    category:{
      id:"",
      name:"",
      typeImg:"",
    },
  }

  @Output() productoAdicionado = new EventEmitter<Product>();
  @Output() mostrarProducto = new EventEmitter<string>();

  addToCart(){
    this.productoAdicionado.emit(this.product);
  }
  showDetail(){
    this.mostrarProducto.emit(this.product.id);
  }
}
