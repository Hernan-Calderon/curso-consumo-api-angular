import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent {

  imgDefault= "./assets/images/default.png";
  img:string= "";
  @Input('img') set cambiarImg(nuevaImg: string){
    this.img = nuevaImg;
  }
  @Output() loaded = new EventEmitter<string>();

  imgError(){
    this.img = this.imgDefault;
  }

  imgLoaded(){
    console.log("Log hijo");
    this.loaded.emit(this.img);
  }
}
