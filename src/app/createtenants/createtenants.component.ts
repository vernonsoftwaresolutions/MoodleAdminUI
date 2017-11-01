import { Component, OnInit } from '@angular/core';

import {CreateTenantService} from './createtenants.service';
import {Tenant} from './createtenants.interface';

@Component({
  selector: 'app-createtenants',
  templateUrl: './createtenants.component.html',
  styleUrls: ['./createtenants.component.css']
})

export class CreatetenantsComponent implements OnInit {

  constructor(private createService: CreateTenantService) { }

  ngOnInit() {
  }

  submitTenant(companyName: string){
    const randomPriority = Math.floor(Math.random() * 100) + 1;

    //todo-make service call to retrieve these
    const tenant = new Tenant({
      'stackName': 'moodle-ecs-single',
      'clientName': companyName.toLowerCase(),
      'vpcId': 'vpc-c7aa77be',
      'hostedZoneName': 'vssdevelopment.com',
      'priority': randomPriority.toString()
    });
    
    console.log('About to send object:');
    console.log(tenant);

    this.createService.createTenant(tenant).subscribe(res => {
      //todo- update this to be a pretty message
      alert('Tenant Creation In Progress');
      console.log(res);
    });
  }

}
