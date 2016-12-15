import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PassportService } from '../passport.service';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [PassportService]
})
export class SignupComponent implements OnInit {

  private user:any = {};
  constructor(private router: Router,private service: PassportService) { }

  signup(){
    console.log("entra signup component");
    this.service.signup(this.user.username,this.user.pass)
      .subscribe(result => {
        if(result === true){
            this.router.navigate(['/'])
        }else{
          this.user = {};
        }
      })
  }



  login(event) {
    event.preventDefault();
    //this.router.parent.navigateByUrl('/login');
  }


  ngOnInit() {
  }

}




  
