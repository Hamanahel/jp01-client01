import { UUID } from "crypto";
import { Client } from "../lib/Client";

const v1_prefix = '/api/v1/content';

export default class Content extends Client {

	constructor(tenant_base_url: string, version_uuid: UUID, session_uuid: UUID) {
		super({ tenant_base_url, version_uuid, session_uuid });
	}

	// Posts

	getPosts(page: number = 1, limit: number = 10) {
		return this.get_request(`${v1_prefix}/post`, { page, limit });
	}
	getPost(slug: string) {
		return this.get_request(`${v1_prefix}/post/${slug}`);
	}

	// Pages

	getPage(slug: string) {
		return this.get_request(`${v1_prefix}/page/${slug}`);
	}


}
