import { SharedArray } from 'k6/data';
import { BaseRest, BaseChecks, ENDPOINTS, testConfig } from '../../../../support/base/baseTest.js';
import { sleep } from 'k6';

export const options = testConfig.moviesPostOptions.soakThresholds;

const base_uri = testConfig.environment.hml.url;
const baseRest = new BaseRest(base_uri);
const baseChecks = new BaseChecks();

const movieData = new SharedArray('movies', function () {
    const jsonData = JSON.parse(open('../../../../data/dynamic/movies.json'));
    return jsonData.movies;
});

let createdMovieIDs = [];

export default () => {
    let movieIndex = __VU % movieData.length;
    let movie = movieData[movieIndex];
    console.log(movie);
    console.log('criando filme', movie)
    const res = baseRest.post(ENDPOINTS.MOVIES_ENDPOINT, movie)
    baseChecks.checkStatusCode(res, 201)
    sleep(1);
}

export function teardown() {
    const getRes = baseRest.get(ENDPOINTS.MOVIES_ENDPOINT);
    baseChecks.checkStatusCode(getRes, 200);

    const movies = getRes.json();
    movies.forEach(movie => {
            createdMovieIDs.push(movie._id);
    });

    createdMovieIDs.forEach(_id => {
        const deleteRes = baseRest.del(`${ENDPOINTS.MOVIES_ENDPOINT}/${_id}`);
        baseChecks.checkStatusCode(deleteRes);
        console.log(`Filme com ID ${_id} deletado.`);
    });
};