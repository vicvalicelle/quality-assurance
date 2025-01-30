import { SharedArray } from 'k6/data';
import { BaseRest, BaseChecks, ENDPOINTS, testConfig } from '../../../../support/base/baseTest.js';
import { sleep } from 'k6';

export const options = testConfig.moviesDeleteOptions.spikeThresholds;

const base_uri = testConfig.environment.hml.url;
const baseRest = new BaseRest(base_uri);
const baseChecks = new BaseChecks();

const movieData = new SharedArray('movies', function () {
    const jsonData = JSON.parse(open('../../../../data/dynamic/movies.json'));
    return jsonData.movies;
});

export function setup() {
    movieData.forEach(movie => {
        console.log('criando filme', movie);
        const postRes = baseRest.post(ENDPOINTS.MOVIES_ENDPOINT, movie);
        baseChecks.checkStatusCode(postRes, 201);
    });
}

export default () => {
    const getRes = baseRest.get(ENDPOINTS.MOVIES_ENDPOINT);
    baseChecks.checkStatusCode(getRes);

    const movies = getRes.json();

    const firstMovieID = movies[__VU]._id;
    console.log(`Deletando o filme com ID: ${firstMovieID}`);

    const deleteRes = baseRest.del(`${ENDPOINTS.MOVIES_ENDPOINT}/${firstMovieID}`);
    baseChecks.checkStatusCode(deleteRes);
    sleep(1);
};
