import * as _ from 'lodash';

interface TenantInterface {
    stackName: string;
    clientName: string;
    vpcId: string;
    hostedZoneName: string;
    priority: string;


}

export class Tenant implements TenantInterface {

    stackName: string;
    clientName: string;
    vpcId: string;
    hostedZoneName: string;
    priority: string;

    constructor(private data?: TenantInterface) {
        // This basically does the initialization from a variable json object.
        // I later on just pass the json data into the constructor.
        if (data) {
            _.assign(this, data);
        }
    }
    //helper method to return full json data
    //todo-there has got to be a better way to do this.
    getData(){
        return this.data;
    }

}
