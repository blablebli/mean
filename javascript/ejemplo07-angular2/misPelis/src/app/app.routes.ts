import {Routes} from '@angular/router';
import { ComponentePeliculasComponent } from './componente-peliculas/componente-peliculas.component';
import {ComponenteExternasPelisComponent} from './componente-externas-pelis/componente-externas-pelis.component';


/*import {ConsultaLibroComponent} from './consulta-libro/consulta-libro.component'
import {FormularioLibroComponent} from './formulario-libro/formulario-libro.component'
import {ListaLibrosComponent} from './lista-libros/lista-libros.component'
*/
// esto no va a ser una clase lo q exporte sino una constante
export const AppRoutes: Routes = [
     //path es la ruta q pongo en el navegador en este caso es la raiz 
    //y el 2 parametro redirige a donde va a ir cuando vaya a raiz
    //y el 3 parametro para decir q es exacto lo q viene de la raiz

    //y voy añadiendo nuevos path cuando ponga listar q componente quiero q carge cuando ponga listar
    {path:'', redirectTo: 'mispelis', pathMatch: "full" } 
    ,
     {path:'mispelis', component:ComponentePeliculasComponent }
    /* ,
       {path:'externo', redirectTo: 'pelisexternas', pathMatch: "full" } 
     
     // Ahora pongo los otros 2 componentes q ya he visto q es facil
     {path:'pelisexternas', ComponenteExternasPelisComponent }*/
     /*,
      {path:'consultar/:id', component:ConsultaLibroComponent },
     {path:'formulario', component:FormularioLibroComponent }*/
]