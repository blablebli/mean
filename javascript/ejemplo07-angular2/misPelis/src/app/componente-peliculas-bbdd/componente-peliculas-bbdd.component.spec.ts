/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ComponentePeliculasBbddComponent } from './componente-peliculas-bbdd.component';

describe('ComponentePeliculasBbddComponent', () => {
  let component: ComponentePeliculasBbddComponent;
  let fixture: ComponentFixture<ComponentePeliculasBbddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentePeliculasBbddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentePeliculasBbddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
