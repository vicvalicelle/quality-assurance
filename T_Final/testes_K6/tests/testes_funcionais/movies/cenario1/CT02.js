import { SharedArray } from 'k6/data';
import { BaseRest, BaseChecks, ENDPOINTS, testConfig } from '../../../../support/base/baseTest.js';

export const options = testConfig.options.testesFuncionais;

const base_uri = testConfig.environment.hml.url;
const baseRest = new BaseRest(base_uri);
const baseChecks = new BaseChecks();

const movieData = new SharedArray('movies', function () {
    const jsonData = JSON.parse(open('../../../../data/dynamic/moviesFunctional.json'));
    return jsonData.movies; 
});
  
export default () => {
    const specificMovieIndex = 1;
    const movie = movieData[specificMovieIndex];
    console.log(movie);
    console.log('criando filme com titulo ja existente', movie)
    const urlRes = baseRest.post(ENDPOINTS.MOVIES_ENDPOINT, movie)
    baseChecks.checkStatusCode(urlRes, 400);
    console.log(urlRes.body);
}