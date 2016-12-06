/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Pelis2ExternasServiceExpressMongooseService } from './pelis2-externas-service-express-mongoose.service';

describe('Service: Pelis2ExternasServiceExpressMongoose', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Pelis2ExternasServiceExpressMongooseService]
    });
  });

  it('should ...', inject([Pelis2ExternasServiceExpressMongooseService], (service: Pelis2ExternasServiceExpressMongooseService) => {
    expect(service).toBeTruthy();
  }));
});
