import {Routes} from '@angular/router';
import { ComponenteHomeComponent } from './componente-home/componente-home.component';
import { ComponentePeliculasComponent } from './componente-peliculas/componente-peliculas.component';
import { ComponentePeliculasBbddComponent } from './componente-peliculas-bbdd/componente-peliculas-bbdd.component';
import { ComponenteExternasPelisComponent} from './componente-externas-pelis/componente-externas-pelis.component';
import { ComponenteExternasBbddComponent } from './componente-externas-bbdd/componente-externas-bbdd.component';
import { PermisoAccesoService } from './permiso-acceso.service';
//import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

/*const appRoutes: Routes = [
    {path: 'login',component: LoginComponent//componente de login },
    {path: '', 
        component:HomeComponent// componente con info privada//,
        canActivate: [PermisoAccesoService] },
    {path: '**', redirectTo: ''}

];*/

// esto no va a ser una clase lo q exporte sino una constante
export const AppRoutes2EnlacesDentroComponente: Routes = [
    {  path : '',  redirectTo:'/mispelis',      pathMatch : 'full'      },
    {  path:'mispelis',
         children:[
           {path : '' , component:ComponenteHomeComponent},
           {path : 'home2EnlacesDentroComponente' , component:ComponenteHomeComponent},
           {path : 'listar2EnlacesDentroComponente' , component:ComponentePeliculasComponent},
           {path : 'pelisexternas2EnlacesDentroComponente' , component:ComponenteExternasPelisComponent}
        ]
    }
]

export const AppRoutes: Routes = [
    {    path : '', redirectTo:'/mispelis',    pathMatch : 'full'     },
    { path:'mispelis', component:ComponenteHomeComponent},
    { path:'home', component:ComponenteHomeComponent},
    {path : 'listar' , component:ComponentePeliculasComponent},
    {path : 'listarConBBDD' , component:ComponentePeliculasBbddComponent, canActivate: [PermisoAccesoService] },
    {path : 'pelisexternas' , component:ComponenteExternasPelisComponent},
     {path : 'pelisexternasConBBDD' , component:ComponenteExternasBbddComponent,canActivate: [PermisoAccesoService] },
{path: 'login',component: LoginComponent},
{path: 'register',component: SignupComponent}
]