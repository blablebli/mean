/* tslint:disable:no-unused-variable */
//http://twofuckingdevelopers.com/2016/01/testing-angular-2-with-karma-and-jasmine/
//https://developers.livechatinc.com/blog/testing-angular-2-apps-dependency-injection-and-components/
import { TestBed, async, inject } from '@angular/core/testing';
//importo un mock de http q me gen era angular y q lo puedo utilizar
import { Http, BaseRequestOptions,   Response, ResponseOptions } from '@angular/http';
//y ese q me da 2 objetos mock para hacerlas pruebas
import { MockBackend, MockConnection } from '@angular/http/testing';

import { HttpService } from './http.service';

describe('HttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpService,
      //añado estos provededors
      BaseRequestOptions,
      MockBackend,
      {
        // aqui esta el proveedor q creo yo a mano y q lo defino aqui y le digo como se crea
        // recuerda q lo que quiero es q no ejecuta la peticion del url no se haga pero q funcione bien
          provider: Http,
        // ahora del http utilizo esta plantilla de proveedor q le digo 
          useFactory:(backend: MockBackend, defaultOptions: BaseRequestOptions)=>{
            //y la factoria me tiene q decir como crear el objeto http q va aseruno nuevo con mi backend, defaultOptions
            return new Http(backend, defaultOptions);
          },
         //Ahora este servicio  le digo q depende de estos pq se necesita q se creen antes los otros  
          deps:[MockBackend,BaseRequestOptions]
      }
      ]
    });
  });
//defino una accion y el done q termine con un timeout si quiero la accion es inject le meto mi servicio mock
// y coge el mockbacken q esta por detras. y lo que hara será
// q le mete una conexion q emula una conexion y le metor en el body un texto pero podria meter un html un json 
// o lo q quiera y me devolvera este Respnse q es miResponse.
beforeEach(inject([MockBackend],(backend:MockBackend)=>{
    const miResponse = new Response(new ResponseOptions({body:"toma billetes"}));
    //le digo q se subscribe a la coneccsion 
    backend.connections.subscribe((conn)=>{conn.mockRespond(miResponse)})
}));



// Ahora escribo la prueba despues del beforeEach inject y aunque le digo q coga el httpService como le he dicho
//q lo emule cogera la emoulacion
it('A ver si el servicio me devuelve billestes', inject([HttpService],(service:HttpService)=>{

  service.gimmeTheMoney().subscribe((response: Response)=>{
    //cogera el texto q le he puesto en el body --> morcillas en 
    expect(response.text()).toBe("toma billetes");
  })
}));

  it('should ...', inject([HttpService], (service: HttpService) => {
    expect(service).toBeTruthy();
  }));
});
