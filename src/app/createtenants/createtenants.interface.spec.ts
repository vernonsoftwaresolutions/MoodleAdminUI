import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tenant } from './createtenants.interface';

describe('createtenants interface', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
          providers: [Tenant]
        });
      });
  it('model should be created ', () => {
      const model = new Tenant();
    expect(model).toBeTruthy();
  });
  it('model should be created with Stackname', () => {
    const model = new Tenant({
        stackName: 'STACKNAME',
        clientName: 'CLIENTNAME',
        vpcId: 'VPCID',
        hostedZoneName: 'HOSTNAME',
        priority: '1',
    });
    console.log('printing somethings');
    console.log(model);
    expect(model.stackName).toBe('STACKNAME');
    });
    it('model should be created with clientName', () => {
        const model = new Tenant({
            stackName: 'STACKNAME',
            clientName: 'CLIENTNAME',
            vpcId: 'VPCID',
            hostedZoneName: 'HOSTNAME',
            priority: '1',
        });
        expect(model.clientName).toBe('CLIENTNAME');
    });
    it('model should be created with vpcId', () => {
        const model = new Tenant({
            stackName: 'STACKNAME',
            clientName: 'CLIENTNAME',
            vpcId: 'VPCID',
            hostedZoneName: 'HOSTNAME',
            priority: '1',
        });
        expect(model.vpcId).toBe('VPCID');
    });
    it('model should be created with hostedZoneName', () => {
        const model = new Tenant({
            stackName: 'STACKNAME',
            clientName: 'CLIENTNAME',
            vpcId: 'VPCID',
            hostedZoneName: 'HOSTNAME',
            priority: '1',
        });
        expect(model.hostedZoneName).toBe('HOSTNAME');
    });
    it('model should be created with priority', () => {
        const model = new Tenant({
            stackName: 'STACKNAME',
            clientName: 'CLIENTNAME',
            vpcId: 'VPCID',
            hostedZoneName: 'HOSTNAME',
            priority: '1',
        });

        expect(model.priority).toBe('1');
    });
       it('Get data returns json', () => {
        const tenant = {
            stackName: 'STACKNAME',
            clientName: 'CLIENTNAME',
            vpcId: 'VPCID',
            hostedZoneName: 'HOSTNAME',
            priority: '1',
        };
        const model = new Tenant(tenant);

        expect(model.getData()).toBe(tenant);
    });

});
