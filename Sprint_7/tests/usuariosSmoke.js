import { BaseRest, BaseChecks, ENDPOINTS, testConfig } from '../support/base/baseTest.js';
import { generateUserData } from '../data/dynamic/faker.js';

export const options = testConfig.options.smokeThresholds;

const base_uri = testConfig.environment.hml.url;
const baseRest = new BaseRest(base_uri);
const baseChecks = new BaseChecks();

export function setup() {
    // Cria usuário
    const payload = generateUserData();
    const urlRes = baseRest.post(ENDPOINTS.USER_ENDPOINT, payload);

    // Checks
    baseChecks.checkStatusCode(urlRes, 201)

    // Retorna usuário
    return { responseData : urlRes.json()}
};

export default (data) => {
    // Pega o id do usuário
    const userId = data.responseData._id
    
    // Deleta usuário
    const res = baseRest.del(ENDPOINTS.USER_ENDPOINT + `/${userId}`)

    // Checks
    baseChecks.checkStatusCode(res, 200)
    baseChecks.checkResponseDelSuccess(res);
};