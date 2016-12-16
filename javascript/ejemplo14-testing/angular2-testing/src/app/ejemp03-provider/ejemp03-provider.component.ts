import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-ejemp03-provider',
  templateUrl: './ejemp03-provider.component.html',
  styleUrls: ['./ejemp03-provider.component.css'],
  providers: [UsersService]
})
export class Ejemp03ProviderComponent implements OnInit {
private users: Array<string>;
  constructor( private service: UsersService) {
this.users = service.getUsers();

   }

  ngOnInit() {
  }

}
