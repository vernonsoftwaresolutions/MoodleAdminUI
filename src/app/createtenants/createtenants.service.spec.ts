import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { CreateTenantService } from './createtenants.service';

describe('CreateTenantService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [
            HttpModule
        ],
      providers: [CreateTenantService]
    });
  });

  it('should be created', inject([CreateTenantService, HttpModule], (http: HttpModule, service: CreateTenantService) => {
    expect(service).toBeTruthy();
  }));
});
