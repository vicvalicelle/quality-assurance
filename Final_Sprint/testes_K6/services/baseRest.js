import { BaseService } from "../services/baseService.js";
import http from "k6/http";

export class BaseRest extends BaseService {
    constructor(base_url) {
        super(base_url);
    }

    post(endpoint, body, headers = {}, params = {}) {
        let uri = this.base_url + endpoint;
        let options = this.buildOptions(headers, params);
        return http.post(uri, JSON.stringify(body), options)
    }
    
    get(endpoint, headers = {}, params = {}) {
        let uri = this.base_url + endpoint;
        let options = this.buildOptions(headers, params);
        this.response = http.get(uri, options); 
        return this.response;
    }

    put(endpoint, body, headers = {}, params = {}) {
        let uri = this.base_url + endpoint;
        let options = this.buildOptions(headers, params);
        this.response = http.put(uri, JSON.stringify(body), options);
        return this.response;
    }
    
    del(endpoint, headers = {}, params = {}) {
        let uri = this.base_url + endpoint;
        let options = this.buildOptions(headers, params);
        this.response = http.del(uri, null, options); 
        return this.response;
    }

    buildOptions(headers = {}, params = {}) {
        return {
            headers: Object.assign({'Content-Type': 'application/json'}, headers),
            params: Object.assign({}, params)
        }
    }
}
