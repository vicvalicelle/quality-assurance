import { BaseRest, BaseChecks, ENDPOINTS, testConfig } from '../support/base/baseTest.js';

const base_uri = testConfig.environment.hml.url;
const baseRest = new BaseRest(base_uri);
const baseChecks = new BaseChecks();

export const options = testConfig.options.smokeThresholds;

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

    // Adicionando produto ao carrinho
    const payload = {
        produtos: [{
            idProduto: '000Lj29ghxM7Qn5j',
            quantidade: 1
        }]
    }

    const resUpdate = baseRest.post(ENDPOINTS.CARTS_ENDPOINT, payload, headers); 

    // Checks
    baseChecks.checkStatusCode(resUpdate, 201);
    baseChecks.checkResponsePostSuccess(resUpdate);

    // Deletando carrinho
    const resDel = baseRest.del(ENDPOINTS.CARTS_ENDPOINT_CANCELA, headers);

    // Checks
    baseChecks.checkStatusCode(resDel);
}