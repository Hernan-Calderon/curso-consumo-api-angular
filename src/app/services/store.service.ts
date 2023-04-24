import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product.model'

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private carritoDeCompras:Product[]=[];
  private myCart = new BehaviorSubject<Product[]>([]);
  myCart$ = this.myCart.asObservable();

  constructor() { }

  adicionarProducto(producto:Product){
    this.carritoDeCompras.push(producto);
    this.myCart.next(this.carritoDeCompras);
  }

  getCarrito(){
    return this.carritoDeCompras;
  }

  getTotal(){
    return this.carritoDeCompras.reduce((sum, item)=>sum + item.price, 0);
  }
}
