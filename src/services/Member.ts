import { Client } from "../lib/Client";

export class Member extends Client {
    constructor(tenantBaseURL: string, sessionToken: string) {
        super(tenantBaseURL, sessionToken);
    }
    getMe() {
        return this.get_request('/api/v1/member/me');
    }
    postSetMember(username: string) {
        return this.post_request('/api/v1/member/set_member', { username });
    }
    postVerifyPassword(password: string) {
        return this.post_request('/api/v1/member/verify_password', { password });
    }
    get2FAPayload() {
        return this.get_request('/api/v1/member/2fa_t01');
    }
    deleteSession() {
        return this.delete_request('/api/v1/member/session');
    }
}
