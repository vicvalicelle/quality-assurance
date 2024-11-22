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
    console.log('ticket de id: abcd')
    const specificTicketIndex = 19;
    const ticket = ticketData[specificTicketIndex];
    console.log('editando ticket com id: abcd', ticket)

    const urlRes = baseRest.put(ENDPOINTS.TICKETS_ENDPOINT + `/abcd`, ticket)
    baseChecks.checkStatusCode(urlRes, 400)
    console.log(urlRes.body)
    console.log(urlRes.status)
};
