import { sleep } from 'k6';
import { SharedArray } from 'k6/data';
import { randomItem } from 'https://jslib.k6.io/k6-utils/1.2.0/index.js';
import { BaseRest, BaseChecks, ENDPOINTS, testConfig } from '../support/base/baseTest.js';

export const options = {
    vus: 1,
    duration: '1s',
};

const base_uri = testConfig.environment.ec2.url;
const baseRest = new BaseRest(base_uri);
const baseChecks = new BaseChecks();

const data = new SharedArray('Users', function () {
    const jsonData = JSON.parse(open('../data/dynamic/user.json'));
    return jsonData.users;
});

export function setup() {
    let responseData = [];

    data.forEach(user => {
        console.log('criando usuario', user)
        const res = baseRest.post(ENDPOINTS.USER_ENDPOINT, user)
        baseChecks.checkStatusCode(res, 201)
        baseChecks.checkResponseId(res)

        responseData.push(res.json())
    })

    return { responseData }
}

export default () => {
    let user = randomItem(data);
    
    const payload = {
        email: user.email,
        password: user.password
    }
    console.log('login com usuario', payload)

    const urlRes = baseRest.post(ENDPOINTS.LOGIN_ENDPOINT, payload);

    baseChecks.checkStatusCode(urlRes, 200)

    sleep(1);
};

export function teardown(responseData) {
    const ids = responseData.responseData.map(item => item._id)

    ids.forEach(id => {
        console.log(`Teardown deletando o usuario com ID ${id}`)
        const res = baseRest.del(ENDPOINTS.USER_ENDPOINT + `/${id}`)
        baseChecks.checkStatusCode(res, 200)
    })
}
