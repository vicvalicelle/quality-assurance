import { BaseRest, BaseChecks, ENDPOINTS, testConfig } from '../../../../support/base/baseTest.js';

export const options = testConfig.options.testesFuncionais;

const base_uri = testConfig.environment.hml.url;
const baseRest = new BaseRest(base_uri);
const baseChecks = new BaseChecks();

export default () => {
    console.log('consultando filme')
    const urlRes = baseRest.get(ENDPOINTS.MOVIES_ENDPOINT)
    baseChecks.checkResponseMovieGetSuccess(urlRes)
};