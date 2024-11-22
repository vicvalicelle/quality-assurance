export class BaseService {
    constructor(base_url) {
        this.base_url = base_url;
        this.response;
    }

    getResponse() {
        return this.response;
    }
}
