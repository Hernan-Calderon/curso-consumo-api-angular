import { Component } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  activeMenu = false;
  contador= 0;

  constructor(private storeService:StoreService){}

  ngOnInit(){
    this.storeService.myCart$.subscribe(productos=>this.contador=productos.length);
  }

  toggleMenu(){
    this.activeMenu = !this.activeMenu;
  }
}