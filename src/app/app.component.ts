import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'curso-componentes';
  padre:string="https://www.w3schools.com/howto/img_avatar.png";


  onLoaded(event:string){
    console.log("Log padre: ",event);
  }
}
