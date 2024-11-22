import { BaseRest, BaseChecks, ENDPOINTS, testConfig } from '../support/base/baseTest.js';
import { generateUserData, generateProductData } from '../data/dynamic/faker.js';

const base_uri = testConfig.environment.hml.url;
const baseRest = new BaseRest(base_uri);
const baseChecks = new BaseChecks();

export const options = testConfig.options.smokeThresholdsFluxos;

export default function () {
  // Cria Usuário
  const payloadCreateUser = generateUserData(); 
  const resCreateUser = baseRest.post(ENDPOINTS.USER_ENDPOINT, payloadCreateUser); 

  // Checks
  baseChecks.checkStatusCode(resCreateUser, 201);
  baseChecks.checkResponsePostSuccess(resCreateUser); 

  // Login
  const payloadLogin = {
    email: payloadCreateUser.email,
    password: payloadCreateUser.password 
  };

  const resLogin = baseRest.post(ENDPOINTS.LOGIN_ENDPOINT, payloadLogin);
  
  // Checks
  baseChecks.checkStatusCode(resLogin, 200);
  baseChecks.checkResponseLoginSuccess(resLogin); 
  baseChecks.checkResponseToken(resLogin);
  
  // Token
  const token = resLogin.json('authorization'); 

  // Cria Produto
  const payloadCreateProduct = generateProductData();
  const headers = {
    'Authorization': token,
    'Content-Type': 'application/json'
  };

  const resCreateProduct = baseRest.post(ENDPOINTS.PRODUCTS_ENDPOINT, payloadCreateProduct, headers); 

  // Checks
  baseChecks.checkStatusCode(resCreateProduct, 201); 
  baseChecks.checkResponsePostSuccess(resCreateProduct); 

  // Id do produto
  const produtoId = resCreateProduct.json().id; 

  // Adiciona ao Carrinho
  const payloadAddToCart = {
    produtoId: produtoId,
    quantidade: 1
  };

  const resAddToCart = baseRest.post(ENDPOINTS.CARTS_ENDPOINT, payloadAddToCart, headers); 

  // Checks
  baseChecks.checkStatusCode(resAddToCart, 201); 
}