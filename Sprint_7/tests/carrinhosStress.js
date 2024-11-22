import { BaseRest, BaseChecks, ENDPOINTS, testConfig } from '../support/base/baseTest.js';

export const options = testConfig.options.stressThresholds;

const base_uri = testConfig.environment.hml.url;
const baseRest = new BaseRest(base_uri);
const baseChecks = new BaseChecks();

export default () => {
    // Get carrinhos
    const urlRes = baseRest.get(ENDPOINTS.CARTS_ENDPOINT);
    // Checks
    baseChecks.checkStatusCode(urlRes, 200)
    baseChecks.checkResponseGetSuccess
};