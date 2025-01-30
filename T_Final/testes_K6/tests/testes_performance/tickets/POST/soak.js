import { SharedArray } from 'k6/data';
import { BaseRest, BaseChecks, ENDPOINTS, testConfig } from '../../../../support/base/baseTest.js';
import { sleep } from 'k6';

export const options = testConfig.ticketsOptions.soakThresholds;

const base_uri = testConfig.environment.hml.url;
const baseRest = new BaseRest(base_uri);
const baseChecks = new BaseChecks();

const ticketData = new SharedArray('tickets', function () {
    const jsonData = JSON.parse(open('../../../../data/dynamic/tickets.json'));
    return jsonData.tickets; 
});
  
export default () => {
    let ticketIndex = __VU % ticketData.length;
    let ticket = ticketData[ticketIndex];
    console.log('criando ticket', ticket)
    const res = baseRest.post(ENDPOINTS.TICKETS_ENDPOINT, ticket)
    baseChecks.checkStatusCode(res, 201)
    sleep(1);
}