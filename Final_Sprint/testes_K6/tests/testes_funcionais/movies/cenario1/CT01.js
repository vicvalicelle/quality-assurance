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
    const specificMovieIndex = 0;
    const movie = movieData[specificMovieIndex];
    console.log('criando filme', movie)
    const urlRes = baseRest.post(ENDPOINTS.MOVIES_ENDPOINT, movie)
    baseChecks.checkResponseMoviePostSuccess(urlRes)
    console.log(urlRes.body)
}