/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Ejemp03ProviderComponent } from './ejemp03-provider.component';
//paso1 importo el servicio
import { UsersService } from '../users.service';
import { MockusersService} from '../mockusers.service';

describe('Ejemp03ProviderComponent', () => {
  let component: Ejemp03ProviderComponent;
  let fixture: ComponentFixture<Ejemp03ProviderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ejemp03ProviderComponent ],
// paso2 añado q proveedores voy a utilizar
// Esto es nuevo le digo q utilize el proveedor UserService y q sustituya y utiliza la clase esta.
providers: [{provide: UsersService, useClass: MockusersService}]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ejemp03ProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

//paso3 Aqui  lo mismo q el input le tengoq decir async por si llega tarde
it('Se  comprueba q se renderiza los clientes q le llegan del servicio', async(() => {
    const element = fixture.nativeElement; //cojo el codig
    fixture.detectChanges();// una vez q ha detectado los cambios q compruebe el span
    expect(element.querySelectorAll("span").length).toBe(3);
  }));

});
