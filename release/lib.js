"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// import { v4 as uuidV4 } from "uuid";
// export type Tenant = {
//     name: string;
//     // uuid: typeof(uuidV4);
// };
define("lib/Client", ["require", "exports", "axios"], function (require, exports, axios_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Client = void 0;
    var Client = /** @class */ (function () {
        function Client(tenantBaseURL, sessionToken) {
            this.axios_client = axios_1.default.create({
                baseURL: tenantBaseURL,
                timeout: 15000,
                headers: {
                    'Authorization': "Bearer " + sessionToken
                }
            });
        }
        Client.prototype.get_request = function (path) {
            return this.axios_client.get(path)
                .then(function (response) { console.log(response.data); })
                .catch(function (error) { console.log(error.response.data.message); });
        };
        Client.prototype.post_request = function (path, $data) {
            return this.axios_client.post(path, $data)
                .then(function (response) { console.log(response.data); })
                .catch(function (error) { console.log(error.response.data.message); });
        };
        Client.prototype.delete_request = function (path) {
            return this.axios_client.delete(path)
                .then(function (response) { console.log(response.data); })
                .catch(function (error) { console.log(error.response.data.message); });
        };
        return Client;
    }());
    exports.Client = Client;
});
define("services/Member", ["require", "exports", "lib/Client"], function (require, exports, Client_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Member = void 0;
    var Member = /** @class */ (function (_super) {
        __extends(Member, _super);
        function Member(tenantBaseURL, sessionToken) {
            return _super.call(this, tenantBaseURL, sessionToken) || this;
        }
        Member.prototype.getMe = function () {
            return this.get_request('/api/v1/member/me');
        };
        Member.prototype.postSetMember = function (username) {
            return this.post_request('/api/v1/member/set_member', { username: username });
        };
        Member.prototype.postVerifyPassword = function (password) {
            return this.post_request('/api/v1/member/verify_password', { password: password });
        };
        Member.prototype.get2FAPayload = function () {
            return this.get_request('/api/v1/member/2fa_t01');
        };
        return Member;
    }(Client_1.Client));
    exports.Member = Member;
});
