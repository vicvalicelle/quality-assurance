import { BaseRest, BaseChecks, ENDPOINTS, testConfig } from '../support/base/baseTest.js';
import { generateUserData } from '../data/dynamic/faker.js';

export const options = testConfig.options.loadThresholds;

const base_uri = testConfig.environment.hml.url;
const baseRest = new BaseRest(base_uri);
const baseChecks = new BaseChecks();

export default () => {
    // Cria usuário
    const payload = generateUserData();
    const createUserResponse = baseRest.post(ENDPOINTS.USER_ENDPOINT, payload);

    // Checks
    baseChecks.checkStatusCode(createUserResponse, 201);
    baseChecks.checkResponsePostSuccess(createUserResponse);

    // Pega id do usuário
    const userId = createUserResponse.json()._id;

    // Deleta usuário
    const del = baseRest.del(ENDPOINTS.USER_ENDPOINT + `/${userId}`);

    // Checks
    baseChecks.checkStatusCode(del, 200)
};