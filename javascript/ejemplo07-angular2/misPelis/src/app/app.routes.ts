import {Routes} from '@angular/router';
import { ComponenteHomeComponent } from './componente-home/componente-home.component';
import { ComponentePeliculasComponent } from './componente-peliculas/componente-peliculas.component';
import { ComponentePeliculasBbddComponent } from './componente-peliculas-bbdd/componente-peliculas-bbdd.component';
import { ComponenteExternasPelisComponent} from './componente-externas-pelis/componente-externas-pelis.component';
import { ComponenteExternasBbddComponent } from './componente-externas-bbdd/componente-externas-bbdd.component';

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
    {path : 'listarConBBDD' , component:ComponentePeliculasBbddComponent},
    {path : 'pelisexternas' , component:ComponenteExternasPelisComponent},
     {path : 'pelisexternasConBBDD' , component:ComponenteExternasBbddComponent}
]