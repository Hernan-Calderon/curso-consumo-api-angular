import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { StoreService } from '../../services/store.service'
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  carritoDeCompras:Product[]=[];
  total:number=0;
  products:Product[]=[];
  showProductDetail:boolean=false;


  constructor( private storeService:StoreService, private productsService:ProductsService){
    this.carritoDeCompras = this.storeService.getCarrito();
  }

  ngOnInit(){
    this.productsService.getAllProducts().subscribe(datos=>this.products=datos);
  }

  adicionarAlCarrito(producto:Product){
    this.storeService.adicionarProducto(producto);
    this.total = this.storeService.getTotal();
  }

  toggleProductDetail(){
    this.showProductDetail = !this.showProductDetail;
  }

  mostrarProducto(id:string){
    this.productsService.getProduct(id).subscribe(datos=>console.log(datos));
  }

}
