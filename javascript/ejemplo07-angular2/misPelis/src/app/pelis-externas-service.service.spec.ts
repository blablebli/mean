/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PelisExternasServiceService } from './pelis-externas-service.service';

describe('Service: PelisExternasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PelisExternasServiceService]
    });
  });

  it('should ...', inject([PelisExternasServiceService], (service: PelisExternasServiceService) => {
    expect(service).toBeTruthy();
  }));
});
