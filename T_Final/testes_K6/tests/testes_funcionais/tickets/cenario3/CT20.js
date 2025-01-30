import { SharedArray } from 'k6/data';
import { randomItem } from 'https://jslib.k6.io/k6-utils/1.2.0/index.js';
import { BaseRest, BaseChecks, ENDPOINTS, testConfig } from '../../../../support/base/baseTest.js';

export const options = testConfig.options.testesFuncionais;

const base_uri = testConfig.environment.hml.url;
const baseRest = new BaseRest(base_uri);
const baseChecks = new BaseChecks();

const ticketData = new SharedArray('tickets', function () {
    const jsonData = JSON.parse(open('../../../../data/dynamic/ticketsFunctional.json'));
    return jsonData.tickets; 
});

export function setup() {
    return { tickets: baseRest.get(ENDPOINTS.TICKETS_ENDPOINT).json() };
}

export default (data) => {
    let { _id } = randomItem(data.tickets);
    console.log('ticket de id:', _id)
    const specificTicketIndex = 16;
    const ticket = ticketData[specificTicketIndex];
    console.log('editando ticket sem assento', ticket)

    const urlRes = baseRest.put(ENDPOINTS.TICKETS_ENDPOINT + `/${_id}`, ticket)
    baseChecks.checkStatusCode(urlRes, 400)
    console.log(urlRes.body)
    console.log(urlRes.status)
};
