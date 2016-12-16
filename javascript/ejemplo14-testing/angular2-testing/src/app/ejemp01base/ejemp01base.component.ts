import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemp01base',
  templateUrl: './ejemp01base.component.html',
  styleUrls: ['./ejemp01base.component.css']
})
export class Ejemp01baseComponent implements OnInit {
public name: string ="Ruben";
//me creo un array
public elementos: Array<number>= [2,3,6,3,6,4,8,9,23,3,5,6,7];
  constructor() { }

  ngOnInit() {
  }
metodoDeComponent():string{
  return "Hola caracola"
}
}
