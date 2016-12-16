/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Ejemp01baseComponent } from './ejemp01base.component';

describe('Ejemp01baseComponent', () => {
  let component: Ejemp01baseComponent;
  let fixture: ComponentFixture<Ejemp01baseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ejemp01baseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ejemp01baseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
// esta prueba lo creo yo
   it('Existe la ppdad nombre', () => {
    expect(component.name).toBe("Ruben");
  });

  it("pruebo el metodo de compoenet",()=>{
    expect(component.metodoDeComponent()).toBe('Hola caracola');})
  it("pruebo el metodo de compoenet",()=>{
    expect(component.elementos.length)
    .toBeGreaterThanOrEqual(10);})

});
