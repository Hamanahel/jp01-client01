import { UUID } from "crypto";
import { Client } from "../lib/Client";

export class Member extends Client {
    constructor(tenantBaseURL: string, version_uuid: UUID, sessionToken: UUID) {
        super(tenantBaseURL, version_uuid, sessionToken);
    }
    getMe() {
        return this.get_request('/api/v1/member/me');
    }
    postAuthenticate(username: string, password: string, otp_string?: string) {
        return this.post_request('/api/v1/member/authenticate', { username, password, otp: otp_string ?? "" });
    }
    post2FAOptions(username: string, password: string) {
        return this.post_request('/api/v1/member/2fa/options', { username, password });
    }
    postInitiate2FA(username: string, password: string, mode: string) {
        return this.post_request('/api/v1/member/2fa/initiate', { username, password, mode });
    }
    deleteSession() {
        return this.delete_request('/api/v1/member/session');
    }
}
