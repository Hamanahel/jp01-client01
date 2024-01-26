import { UUID } from "crypto";
import { Client } from "../lib/Client";

const v1_prefix = '/api/v1/website';

export default class Website extends Client {

    constructor(tenant_base_url: string, version_uuid: UUID, session_uuid: UUID, website_uuid: UUID) {
        super({ tenant_base_url, version_uuid, session_uuid, website_uuid });
    }

    getInfo() {
        return this.get_request(`${v1_prefix}/info`);
    }
}
