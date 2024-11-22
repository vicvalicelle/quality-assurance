import { BaseRest, BaseChecks, ENDPOINTS, testConfig } from '../support/base/baseTest.js';
import { generateUserPUTData } from '../data/dynamic/faker.js';

export const options = testConfig.options.soakThresholds;

const base_uri = testConfig.environment.hml.url;
const baseRest = new BaseRest(base_uri);
const baseChecks = new BaseChecks();

export function setup() {
    // Cria usuário
    const payload = generateUserPUTData();
    const urlRes = baseRest.post(ENDPOINTS.USER_ENDPOINT, payload);
    
    // Checks
    baseChecks.checkStatusCode(urlRes, 201)
    baseChecks.checkResponsePostSuccess(urlRes)

    // Retorna o usuário
    return { responseData : urlRes.json(), payload}
};

export default (data) => {
    // Pega o id do usuário
    const userId = data.responseData._id

    // Atualiza o usuário
    const res = baseRest.put(ENDPOINTS.USER_ENDPOINT + `/${userId}`, data.payload)

    // Checks
    baseChecks.checkStatusCode(res, 200)
    baseChecks.checkResponsePutSuccess(res)
};

export function teardown(responseData) {
    // Pega o id do usuário
    const userId = responseData.responseData._id

    // DFeleta o usuário
    const res = baseRest.del(ENDPOINTS.USER_ENDPOINT + `/${userId}`)

    // Checks
    baseChecks.checkStatusCode(res, 200)
    baseChecks.checkResponseDelSuccess(res)
}