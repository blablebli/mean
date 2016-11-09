/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ServicePeliculasService } from './service-peliculas.service';

describe('Service: ServicePeliculas', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicePeliculasService]
    });
  });

  it('should ...', inject([ServicePeliculasService], (service: ServicePeliculasService) => {
    expect(service).toBeTruthy();
  }));
});
