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
    console.log('deletenado ticket de id: abcd')
    const urlRes = baseRest.del(ENDPOINTS.TICKETS_ENDPOINT + "/abcd")
    baseChecks.checkStatusCode(urlRes, 404)
    console.log(urlRes.body)
    console.log(urlRes.status)
};