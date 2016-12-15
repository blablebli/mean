import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class PermisoAccesoService implements CanActivate{

  constructor(private router: Router) { }

  canActivate(): boolean{
    if(localStorage.getItem('currentUser')){
      return true;
    }else{
      //ojo aqui con la ruta
      this.router.navigate(['/login']);
      return false;
    }
  }
}