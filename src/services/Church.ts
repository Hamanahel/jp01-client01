import axios from 'axios';

export class Church {
    axios_client: any;

    configBaseURL = 'https://r2-pub.hamanahel.in';

    constructor() {
        this.axios_client = axios.create({
            baseURL: this.configBaseURL,
            timeout: 15000,
        });
    }
    getChurches() {
        return this.axios_client.get('/config/church/index.json');
    }
    getChurch(uuid: string) {
        return this.axios_client.get('/config/church/' + uuid + '.json');
    }
}
