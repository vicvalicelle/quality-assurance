import { SharedArray } from 'k6/data';
import { BaseRest, BaseChecks, ENDPOINTS, testConfig } from '../../../../support/base/baseTest.js';
import { sleep } from 'k6';

export const options = testConfig.moviesDeleteOptions.stressThresholds;

const base_uri = testConfig.environment.hml.url;
const baseRest = new BaseRest(base_uri);
const baseChecks = new BaseChecks();

const movieData = new SharedArray('movies', function () {
    const jsonData = JSON.parse(open('../../../../data/dynamic/movies.json'));
    return jsonData.movies;
});

let createdMovieID;

export function setup() {
    const movie = movieData[0];
    console.log('Criando filme:', movie);

    const postRes = baseRest.post(ENDPOINTS.MOVIES_ENDPOINT, movie);
    baseChecks.checkStatusCode(postRes, 201);

    const getRes = baseRest.get(ENDPOINTS.MOVIES_ENDPOINT);
    baseChecks.checkStatusCode(getRes);

    const movies = getRes.json();

    createdMovieID = movies[movies.length - 1]._id;

    return { movie, movieID: createdMovieID };
}

export default (data) => {
    const { movie, movieID } = data;

    const getRes = baseRest.get(`${ENDPOINTS.MOVIES_ENDPOINT}/${movieID}`);
    baseChecks.checkStatusCode(getRes);

    const movieDetails = getRes.json();
    console.log(`Filme obtido para atualização: ${JSON.stringify(movieDetails)}`);

    const updatedMovie = JSON.parse(JSON.stringify(movie));
    updatedMovie.title = "Starboy";

    const putRes = baseRest.put(`${ENDPOINTS.MOVIES_ENDPOINT}/${movieID}`, updatedMovie);
    baseChecks.checkStatusCode(putRes);

    sleep(1);
};

export function teardown(data) {
    const { movieID } = data;

    console.log(`Deletando o filme com ID: ${movieID}`);
    const deleteRes = baseRest.del(`${ENDPOINTS.MOVIES_ENDPOINT}/${movieID}`);
    baseChecks.checkStatusCode(deleteRes, 200);
}
