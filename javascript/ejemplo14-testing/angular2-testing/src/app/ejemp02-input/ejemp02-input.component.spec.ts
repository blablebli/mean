/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Ejemp02InputComponent } from './ejemp02-input.component';

describe('Ejemp02InputComponent', () => {
  let component: Ejemp02InputComponent;
  let fixture: ComponentFixture<Ejemp02InputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ejemp02InputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ejemp02InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

    it('compruebo q el contenido de la plantilla corresponde con la entrada', async(() => {
   const element= fixture.nativeElement;// esto es para obtener el compilado
 component.clientes = ["Luis Ramon", "Pedro", "Alberto"];// le digo q lo compruebe
 //ahora le digo para q coga el cambio
 fixture.detectChanges();
 //ahroa ya compilado y detectado le digo q tiene q tener tantos span como clientes
 //como he metido 3 clientes tiene q haber 3 span
    expect(element.querySelectorAll("span").length).toBe(3);
    }));
});
