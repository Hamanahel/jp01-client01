import { UUID } from "crypto"

import Menu from "./Services/Menu"
import Church from "./Services/Church"
import Member from "./Services/Member"
import Website from "./Services/Website"

export {
    Menu,
    Church,
    Member,
    Website,
}

export default {
    ChurchClient: () => new Church(),

    MenuClient: (tenant_base_url: string, version_uuid: UUID, session_uuid: UUID) => new Menu(tenant_base_url, version_uuid, session_uuid),
    MemberClient: (tenant_base_url: string, version_uuid: UUID, session_uuid: UUID) => new Member(tenant_base_url, version_uuid, session_uuid),

    WebsiteClient: (tenant_base_url: string, version_uuid: UUID, session_uuid: UUID, website_uuid: UUID) => new Website(tenant_base_url, version_uuid, session_uuid, website_uuid),
}