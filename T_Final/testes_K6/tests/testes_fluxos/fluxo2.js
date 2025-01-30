import { SharedArray } from 'k6/data';
import { BaseRest, BaseChecks, ENDPOINTS, testConfig } from '../../support/base/baseTest.js';
import { sleep } from 'k6';

export const options = testConfig.options.testesFluxo;

const base_uri = testConfig.environment.hml.url;
const baseRest = new BaseRest(base_uri);
const baseChecks = new BaseChecks();

// Carrega os dados dos tickets de um arquivo JSON
const ticketData = new SharedArray('tickets', function () {
    const jsonData = JSON.parse(open('../../data/dynamic/tickets.json'));
    return jsonData.tickets;
});

export function setup() {
    const ticket = ticketData[0]; // Usando o primeiro ticket do array

    // Criação do ticket (POST)
    const postRes = baseRest.post(ENDPOINTS.TICKETS_ENDPOINT, ticket);
    baseChecks.checkStatusCode(postRes, 201);
    console.log(postRes.body)
}

export default (data) => {
    // Faz um GET para listar todos os tickets
    const getRes = baseRest.get(ENDPOINTS.TICKETS_ENDPOINT);
    baseChecks.checkStatusCode(getRes);

    // Pausa para simular espera entre as ações
    sleep(1);
};
