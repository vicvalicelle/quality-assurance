import { BaseRest, BaseChecks, ENDPOINTS, testConfig } from '../support/base/baseTest.js';

const base_uri = testConfig.environment.hml.url;
const baseRest = new BaseRest(base_uri);
const baseChecks = new BaseChecks();

export const options = testConfig.options.soakThresholds;

export default () => {
    // Busca produto por id
    const id = 'BeeJh5lz3k6kSIzA';
    const urlRes = baseRest.get(ENDPOINTS.PRODUCTS_ENDPOINT + `/${id}`);
    // Checks
    baseChecks.checkStatusCode(urlRes, 200)
    baseChecks.checkResponseGetSuccess(urlRes)
};