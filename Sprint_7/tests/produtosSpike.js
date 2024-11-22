import { BaseRest, BaseChecks, ENDPOINTS, testConfig } from '../support/base/baseTest.js';

export const options = testConfig.options.spikeThresholds;

const base_uri = testConfig.environment.hml.url;
const baseRest = new BaseRest(base_uri);
const baseChecks = new BaseChecks();

export default () => {
    // Get de produtos
    const urlRes = baseRest.get(ENDPOINTS.PRODUCTS_ENDPOINT);
    // Checks
    baseChecks.checkStatusCode(urlRes, 200)
    baseChecks.checkResponseGetSuccess(urlRes)
};