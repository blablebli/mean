import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ejemp02-input',
  templateUrl: './ejemp02-input.component.html',
  styleUrls: ['./ejemp02-input.component.css']
})
export class Ejemp02InputComponent implements OnInit {
// estos valores me vienen
// lo opngo public para tener acceso desde preubas
@Input() public clientes: Array<string> = [];
  constructor() { }

  ngOnInit() {
  }

}
