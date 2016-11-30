/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ComponentePeliculasComponent } from './componente-peliculas.component';

describe('ComponentePeliculasComponent', () => {
  let component: ComponentePeliculasComponent;
  let fixture: ComponentFixture<ComponentePeliculasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentePeliculasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentePeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
