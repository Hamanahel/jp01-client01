import axios from 'axios';
import { UUID } from 'crypto';

export class Client {
    protected axios_client: any;

    constructor({
        tenant_base_url,
        version_uuid,
        session_uuid,
        website_uuid,
    }: {
        tenant_base_url: string,
        version_uuid: UUID,
        session_uuid: UUID,
        website_uuid?: UUID
    }) {
        this.axios_client = axios.create({
            baseURL: tenant_base_url,
            timeout: 15000,
            headers: {
                'Authorization': "Bearer " + session_uuid,
                'API-Client-Version-UUID': version_uuid,
                ...(website_uuid ? { 'API-Client-Website-UUID': website_uuid } : {}),
            },
        });
    }

    get_request(path: String, params: any = {}) {
        return this.axios_client.get(path, { params });
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