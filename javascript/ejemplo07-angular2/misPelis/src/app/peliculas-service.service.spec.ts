/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PeliculasServiceService } from './peliculas-service.service';

describe('Service: PeliculasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PeliculasServiceService]
    });
  });

  it('should ...', inject([PeliculasServiceService], (service: PeliculasServiceService) => {
    expect(service).toBeTruthy();
  }));
});
