import { UUID } from "crypto";
import { Client } from "../lib/Client";

const v1_prefix = '/api/v1/variable';

// Expermintal: Aysnc functions that return a value not promise

export default class Variable extends Client {

    constructor(tenant_base_url: string, version_uuid: UUID, session_uuid: UUID) {
        super({ tenant_base_url, version_uuid, session_uuid });
    }

    getBoolean(key: string): any {
        return this.get_request(v1_prefix + '/boolean/' + key);
    }

    getString(key: string): string {
        return this.get_request(v1_prefix + '/string/' + key);
    }

    getInteger(key: string): number {
        return this.get_request(v1_prefix + '/integer/' + key);
    }

}
