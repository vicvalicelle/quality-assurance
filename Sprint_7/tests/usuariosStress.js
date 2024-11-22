import { BaseRest, BaseChecks, ENDPOINTS, testConfig } from '../support/base/baseTest.js';

export const options = testConfig.options.stressThresholds;

const base_uri = testConfig.environment.hml.url;
const baseRest = new BaseRest(base_uri);
const baseChecks = new BaseChecks();

export default () => {
    // Busca usuários
    const urlRes = baseRest.get(ENDPOINTS.USER_ENDPOINT);

    // Checks
    baseChecks.checkStatusCode(urlRes, 200);
    baseChecks.checkResponseGetSuccess(urlRes);
};