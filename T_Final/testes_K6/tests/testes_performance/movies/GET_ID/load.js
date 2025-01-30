import { randomItem } from 'https://jslib.k6.io/k6-utils/1.2.0/index.js';
import { BaseRest, BaseChecks, ENDPOINTS, testConfig } from '../../../../support/base/baseTest.js';

export const options = testConfig.moviesGetIdOptions.loadThresholds;

const base_uri = testConfig.environment.hml.url;
const baseRest = new BaseRest(base_uri);
const baseChecks = new BaseChecks();

export function setup() {
    return { movies: baseRest.get(ENDPOINTS.MOVIES_ENDPOINT).json() };
}

export default (data) => {
    let { _id } = randomItem(data.movies);
    console.log('consultando filme pelo id:', _id)
    const urlRes = baseRest.get(ENDPOINTS.MOVIES_ENDPOINT + "/" + _id)
    baseChecks.checkStatusCode(urlRes)
};