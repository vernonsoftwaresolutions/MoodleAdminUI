import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import {Tenant} from './createtenants.interface';

@Injectable()
export class CreateTenantService {

  constructor(private http: Http) { }

  // Get all posts from the API
  createTenant(tenant: Tenant ) {
    //todo-got to be a better way to do this than the getData method
    return this.http.post('https://api.vssdevelopment.com/dev/moodle/tenants',tenant.getData())
      .map(res => res.json());
  }
}
