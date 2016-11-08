import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works 3!';
 // console.log("text");
  numerillo: number = 7;// le meto esta ppdad a mi subcomponente q tiene un input
}
