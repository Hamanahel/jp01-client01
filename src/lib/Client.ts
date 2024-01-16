import axios from 'axios';

export class Client {
    axios_client: any;

    constructor(tenantBaseURL: string, sessionToken: string) {
        this.axios_client = axios.create({
            baseURL: tenantBaseURL,
            timeout: 15000,
            headers: {
                'Authorization': "Bearer " + sessionToken
            }
        });
    }

    get_request(path: String) {
        return this.axios_client.get(path)
            .then((response: any) => { console.log(response.data) })
            .catch((error: any) => { console.log(error.response.data.message) });
    }

    post_request(path: String, $data: any) {
        return this.axios_client.post(path, $data)
            .then((response: any) => { console.log(response.data) })
            .catch((error: any) => { console.log(error.response.data.message) });
    }

    delete_request(path: String) {
        return this.axios_client.delete(path)
            .then((response: any) => { console.log(response.data) })
            .catch((error: any) => { console.log(error.response.data.message) });
    }
}