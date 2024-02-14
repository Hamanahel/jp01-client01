import { UUID } from "crypto";
import { Client } from "../lib/Client";

const v1_prefix = '/api/v1/member/auth';

export default class Auth extends Client {

	constructor(tenant_base_url: string, version_uuid: UUID, session_uuid: UUID) {
		super({ tenant_base_url, version_uuid, session_uuid });
	}

	GetBypassToken() {
		return this.get_request(v1_prefix + '/bypass_token');
	}
	Authenticate(username: string, password: string, otp_string?: string) {
		return this.post_request(v1_prefix + '/authenticate', { username, password, otp: otp_string ?? "" });
	}
	Fetch2FAOptions(username: string, password: string) {
		return this.post_request(v1_prefix + '/2fa/options', { username, password });
	}
	Initiate2FA(username: string, password: string, mode: string) {
		return this.post_request(v1_prefix + '/2fa/initiate', { username, password, mode });
	}
	deleteSession() {
		return this.delete_request(v1_prefix + '/session');
	}
}
