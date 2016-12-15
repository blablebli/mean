import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PassportService } from '../passport.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] ,
  providers: [PassportService]
})
export class LoginComponent implements OnInit {

  private user:any = {};
  constructor(private router: Router,private service: PassportService) { }

  ngOnInit() {
  }
  autenticar(){
    console.log("entra login component");
    this.service.login(this.user.username,this.user.pass)
      .subscribe(result => {
        if(result === true){
            this.router.navigate(['/'])
        }else{
          this.user = {};
        }
      })
  }
   logout(){
console.log("entra logout component");
     console.log(" antes de hacer logout:"+ JSON.parse(localStorage.getItem('currentUser')));
    this.service.logout();
    console.log(" despues de hacer logout:"+ JSON.parse(localStorage.getItem('currentUser')));
      
  }
}
