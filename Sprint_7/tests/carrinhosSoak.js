import { BaseRest, BaseChecks, ENDPOINTS, testConfig } from '../support/base/baseTest.js';

const base_uri = testConfig.environment.hml.url;
const baseRest = new BaseRest(base_uri);
const baseChecks = new BaseChecks();

export const options = testConfig.options.soakThresholds;

export default () => {
    // Buscando carrinho por id
    const id = 'yumwJs0UTyxjtDz2';
    const urlRes = baseRest.get(ENDPOINTS.CARTS_ENDPOINT + `/${id}`);

    // Checks
    baseChecks.checkStatusCode(urlRes, 200)
    baseChecks.checkResponseGetIdCarrinhosSuccess(urlRes)
};