import { BaseRest, BaseChecks, ENDPOINTS, testConfig } from '../../../../support/base/baseTest.js';

export const options = testConfig.options.testesFuncionais;

const base_uri = testConfig.environment.hml.url;
const baseRest = new BaseRest(base_uri);
const baseChecks = new BaseChecks();

export default () => {
    const id = 'abcd'
    console.log('consultando filme pelo id:', id)
    const urlRes = baseRest.get(ENDPOINTS.MOVIES_ENDPOINT + `/${id}`)
    baseChecks.checkStatusCode(urlRes, 404)
    console.log(urlRes.body)
};