import { BaseRest, BaseChecks, ENDPOINTS, testConfig } from '../support/base/baseTest.js';
import { generateProductData } from '../data/dynamic/faker.js';

const base_uri = testConfig.environment.hml.url;
const baseRest = new BaseRest(base_uri);
const baseChecks = new BaseChecks();

export const options = testConfig.options.smokeThresholdsFluxos;

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

    // Atualiza Produto
    const idProduto = 'BeeJh5lz3k6kSIzA';
    const updateEndpoint = `${ENDPOINTS.PRODUCTS_ENDPOINT}/${idProduto}`;
    const payloadUpdate = generateProductData();
    const resUpdate = baseRest.put(updateEndpoint, payloadUpdate, headers);

    // Checks
    baseChecks.checkStatusCode(resUpdate);
    baseChecks.checkResponsePutSuccess(resUpdate);

    // Cria Carrinho
    const payload = {
        produtos: [{
            idProduto: 'BeeJh5lz3k6kSIzA',
            quantidade: 1
        }]
    }

    const resCart = baseRest.post(ENDPOINTS.CARTS_ENDPOINT, payload, headers); 

    // Checks
    baseChecks.checkStatusCode(resCart, 201);
    baseChecks.checkResponsePostSuccess(resCart);

    // Deleta Carrinho
    const resDel = baseRest.del(ENDPOINTS.CARTS_ENDPOINT_CANCELA, headers);
    
    // Checks
    baseChecks.checkStatusCode(resDel);
}