import { SharedArray } from 'k6/data';
import { randomItem } from 'https://jslib.k6.io/k6-utils/1.2.0/index.js';
import { BaseRest, BaseChecks, ENDPOINTS, testConfig } from '../../../../support/base/baseTest.js';

export const options = testConfig.options.testesFuncionais;

const base_uri = testConfig.environment.hml.url;
const baseRest = new BaseRest(base_uri);
const baseChecks = new BaseChecks();

const movieData = new SharedArray('movies', function () {
    const jsonData = JSON.parse(open('../../../../data/dynamic/moviesFunctional.json'));
    return jsonData.movies; 
});

export function setup() {
    return { movies: baseRest.get(ENDPOINTS.MOVIES_ENDPOINT).json() };
}

export default (data) => {
    let { _id } = randomItem(data.movies);
    console.log('filme de id:', _id)
    const specificMovieIndex = 11;
    const movie = movieData[specificMovieIndex];
    console.log('editando filme', movie)

    const urlRes = baseRest.put(ENDPOINTS.MOVIES_ENDPOINT + `/${_id}`, movie)
    baseChecks.checkStatusCode(urlRes, 400)
    console.log(urlRes.body)
    console.log(urlRes.status)
};