import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';

import { CreatetenantsComponent } from './createtenants.component';
import {CreateTenantService} from './createtenants.service';

describe('CreatetenantsComponent', () => {
  class CreateTenantServiceMock {
    createTenant(): Observable<CreateTenantService> { return Observable.of(); }
  }
  let component: CreatetenantsComponent;
  let fixture: ComponentFixture<CreatetenantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatetenantsComponent ]
    })
    .compileComponents();

    TestBed.overrideComponent(CreatetenantsComponent, {
      set: {
        providers: [
          { provide: CreatetenantsComponent, useClass: CreateTenantServiceMock },
        ]
      }
    });

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatetenantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should be created', () => {
  //   expect(component).toBeTruthy();
  // });
});
