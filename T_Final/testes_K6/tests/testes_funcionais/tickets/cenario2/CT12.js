import { randomItem } from 'https://jslib.k6.io/k6-utils/1.2.0/index.js';
import { BaseRest, BaseChecks, ENDPOINTS, testConfig } from '../../../../support/base/baseTest.js';

export const options = testConfig.options.testesFuncionais;

const base_uri = testConfig.environment.hml.url;
const baseRest = new BaseRest(base_uri);
const baseChecks = new BaseChecks();

export function setup() {
    return { tickets: baseRest.get(ENDPOINTS.TICKETS_ENDPOINT).json() };
}

export default () => {
    console.log('consultando tickets pelo id: abcd')
    const urlRes = baseRest.get(ENDPOINTS.TICKETS_ENDPOINT + "/abcd")
    baseChecks.checkStatusCode(urlRes, 404)
    console.log(urlRes.body)
    console.log(urlRes.status)
};