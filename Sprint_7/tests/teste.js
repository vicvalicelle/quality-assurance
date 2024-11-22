import { sleep } from 'k6';
import { SharedArray } from 'k6/data';
import { generateUserData } from '../data/dynamic/faker.js';
import { BaseRest, BaseChecks, ENDPOINTS, testConfig } from '../support/base/baseTest.js';

export const options = {
    vus: 1,
    duration: '1s',
};

const base_uri = testConfig.environment.hml.url;
const baseRest = new BaseRest(base_uri);
const baseChecks = new BaseChecks();

const data = new SharedArray('Users', function () {
    const jsonData = JSON.parse(open('../data/static/user.json'));
    return jsonData.users;
});

const payload = {
    "nome": "Fulano da Silva",
    "email": "ciclanoss@qa.com.br",
    "password": "teste",
    "administrador": "true"
}

export function setup() {
    const res = baseRest.post(ENDPOINTS.USER_ENDPOINT, payload)

    baseChecks.checkStatusCode(res, 201)

    baseChecks.checkResponseId(res)

    return { responseData : res.json() }
}

export default () => {
    let userIndex = __ITER % data.length;
    let user = data[userIndex];
    console.log(user);

    const urlRes = baseRest.post(ENDPOINTS.LOGIN_ENDPOINT, user);

    baseChecks.checkStatusCode(urlRes, 200)

    console.log('REALIZANDO LOGIN')
    sleep(1);

    // const userData = generateUserData();

    // const res = http.post('http://localhost:3000/usuarios', userData);
  
    // check(res, {
    //   'status 201': (r) => r.status === 201,
    //   '_id': (r) => r.body.includes('_id'),
    //});
};

export function teardown(responseData) {
    const userId = responseData._id
    const res = baseRest.del(ENDPOINTS.USER_ENDPOINT + `/${userId}`)

    baseChecks.checkStatusCode(res, 200)

    console.log(`Teardown deletando o usuario com ID ${userId}`)
}