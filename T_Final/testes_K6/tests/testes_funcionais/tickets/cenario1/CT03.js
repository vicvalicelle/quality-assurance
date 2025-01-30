import { SharedArray } from 'k6/data';
import { BaseRest, BaseChecks, ENDPOINTS, testConfig } from '../../../../support/base/baseTest.js';

export const options = testConfig.options.testesFuncionais;

const base_uri = testConfig.environment.hml.url;
const baseRest = new BaseRest(base_uri);
const baseChecks = new BaseChecks();


const ticketData = new SharedArray('tickets', function () {
    const jsonData = JSON.parse(open('../../../../data/dynamic/ticketsFunctional.json'));
    return jsonData.tickets; 
});
  
export default () => {
    const specificTicketIndex = 2;
    const ticket = ticketData[specificTicketIndex];
    console.log('criando ticket com userId inválido', ticket)
    const urlRes = baseRest.post(ENDPOINTS.TICKETS_ENDPOINT, ticket)
    baseChecks.checkStatusCode(urlRes, 400)
    console.log(urlRes.body)
    console.log(urlRes.status)
}