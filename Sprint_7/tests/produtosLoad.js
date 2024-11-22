import { BaseRest, BaseChecks, ENDPOINTS, testConfig } from '../support/base/baseTest.js';
import { generateProductData } from '../data/dynamic/faker.js';

const base_uri = testConfig.environment.hml.url;
const baseRest = new BaseRest(base_uri);
const baseChecks = new BaseChecks();

export const options = testConfig.options.loadThresholds;

export default function () {
    // Login
    const payloadLogin = {
        email: 'novoemail@example.com',
        password: 'novasenha'
    };

    const resLogin = baseRest.post(ENDPOINTS.LOGIN_ENDPOINT, payloadLogin);
    
    // Checks
    baseChecks.checkStatusCode(resLogin);
    baseChecks.checkResponseLoginSuccess(resLogin);
    baseChecks.checkResponseToken(resLogin);

    // Token
    const token = resLogin.json('authorization');
    const headers = {
        'Authorization': token,
        'Content-Type': 'application/json'
    };

    // Cria produto
    const payloadUpdate = generateProductData();

    const resUpdate = baseRest.post(ENDPOINTS.PRODUCTS_ENDPOINT, payloadUpdate, headers); 

    // Checks
    baseChecks.checkStatusCode(resUpdate, 201);
    baseChecks.checkResponsePostSuccess(resUpdate)
}