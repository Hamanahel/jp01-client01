import axios from 'axios';
import { UUID } from 'crypto';

export class Client {
    axios_client: any;

    constructor(tenantBaseURL: string, version_uuid: UUID, sessionToken: UUID) {
        this.axios_client = axios.create({
            baseURL: tenantBaseURL,
            timeout: 15000,
            headers: {
                'Authorization': "Bearer " + sessionToken,
                'API-Client-Version-UUID': version_uuid,
            }
        });
    }

    get_request(path: String) {
        return this.axios_client.get(path);
    }
    post_request(path: String, $data: any) {
        return this.axios_client.post(path, $data);
    }
    delete_request(path: String) {
        return this.axios_client.delete(path);
    }
}


// .then((response: any) => { console.log(response.data) })
// .catch((error: any) => { console.log(error.response.data.message) });