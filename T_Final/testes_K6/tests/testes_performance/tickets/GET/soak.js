import { BaseRest, BaseChecks, ENDPOINTS, testConfig } from '../../../../support/base/baseTest.js';

export const options = testConfig.ticketsOptions.soakThresholds;

const base_uri = testConfig.environment.hml.url;
const baseRest = new BaseRest(base_uri);
const baseChecks = new BaseChecks();

console.log('consultando tickets');

export default () => {
    const urlRes = baseRest.get(ENDPOINTS.TICKETS_ENDPOINT)
    baseChecks.checkStatusCode(urlRes)
};