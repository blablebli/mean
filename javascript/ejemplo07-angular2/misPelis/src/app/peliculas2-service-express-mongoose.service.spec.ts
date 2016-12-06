/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Peliculas2ServiceExpressMongooseService } from './peliculas2-service-express-mongoose.service';

describe('Service: Peliculas2ServiceExpressMongoose', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Peliculas2ServiceExpressMongooseService]
    });
  });

  it('should ...', inject([Peliculas2ServiceExpressMongooseService], (service: Peliculas2ServiceExpressMongooseService) => {
    expect(service).toBeTruthy();
  }));
});
