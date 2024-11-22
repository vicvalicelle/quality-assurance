import { BaseRest, BaseChecks, ENDPOINTS, testConfig } from '../support/base/baseTest.js';
import { SharedArray } from 'k6/data';

export const options = testConfig.options.smokeThresholds;

const base_uri = testConfig.environment.hml.url;
const baseRest = new BaseRest(base_uri);
const baseChecks = new BaseChecks();

const data = new SharedArray('Users', function () {
    const jsonData = JSON.parse(open('../data/static/user.json'));
    return jsonData.users;
});

export default () => {
    // Busca o usuário
    let userIndex = __ITER % data.length;
    let user = data[userIndex];
    console.log(user);

    // Realiza o login
    const urlRes = baseRest.post(ENDPOINTS.LOGIN_ENDPOINT, user);

    // Checks
    baseChecks.checkStatusCode(urlRes, 200)
    baseChecks.checkResponseLoginSuccess(urlRes)
    baseChecks.checkResponseToken(urlRes)
};