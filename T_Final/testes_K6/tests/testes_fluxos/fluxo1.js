import { SharedArray } from 'k6/data';
import { BaseRest, BaseChecks, ENDPOINTS, testConfig } from '../../support/base/baseTest.js';
import { sleep } from 'k6';

export const options = testConfig.options.testesFluxo;

const base_uri = testConfig.environment.hml.url;
const baseRest = new BaseRest(base_uri);
const baseChecks = new BaseChecks();

// Carrega os dados do arquivo JSON
const movieData = new SharedArray('movies', function () {
    const jsonData = JSON.parse(open('../../data/dynamic/movies.json'));
    return jsonData.movies;
});

let createdMovieID;

export function setup() {
    const movie = movieData[0];
    console.log('Criando filme:', movie);

    // Cria o filme (POST)
    const postRes = baseRest.post(ENDPOINTS.MOVIES_ENDPOINT, movie);
    baseChecks.checkStatusCode(postRes, 201);

    // Obtém todos os filmes (GET) e captura o ID do filme recém-criado
    const getRes = baseRest.get(ENDPOINTS.MOVIES_ENDPOINT);
    baseChecks.checkStatusCode(getRes);
    const movies = getRes.json();
    createdMovieID = movies[movies.length - 1]._id;

    // Retorna os dados do filme e o ID criado
    return { movie, movieID: createdMovieID };
}

export default (data) => {
    const { movie, movieID } = data;

    // Obtém detalhes do filme recém-criado (GET)
    const getRes = baseRest.get(`${ENDPOINTS.MOVIES_ENDPOINT}/${movieID}`);
    baseChecks.checkStatusCode(getRes);

    // Atualiza o filme com um novo título (PUT)
    const movieDetails = getRes.json();
    const updatedMovie = JSON.parse(JSON.stringify(movie));
    console.log(`Filme obtido para atualização: ${JSON.stringify(movieDetails)}`);
    updatedMovie.title = "Party Monster";
    
    const putRes = baseRest.put(`${ENDPOINTS.MOVIES_ENDPOINT}/${movieID}`, updatedMovie);
    baseChecks.checkStatusCode(putRes);
    console.log(putRes.body);

    // Pausa para simular espera entre as ações
    sleep(1);
};

export function teardown(data) {
    const { movieID } = data;

    // Deleta o filme após o teste (DELETE)
    console.log(`Deletando o filme com ID: ${movieID}`);
    const deleteRes = baseRest.del(`${ENDPOINTS.MOVIES_ENDPOINT}/${movieID}`);
    baseChecks.checkStatusCode(deleteRes);
}
