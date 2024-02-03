import { UUID } from "crypto"

import Menu from "./Services/Menu"
import Church from "./Services/Church"
import Member from "./Services/Member"
import Content from "./Services/Content"
import Variable from "./Services/Variable"

export {
	Menu,
	Church,
	Member,
	Content,
	Variable,
}

export default {
	ChurchClient: () => new Church(),

	MenuClient: (tenant_base_url: string, version_uuid: UUID, session_uuid: UUID) => new Menu(tenant_base_url, version_uuid, session_uuid),
	MemberClient: (tenant_base_url: string, version_uuid: UUID, session_uuid: UUID) => new Member(tenant_base_url, version_uuid, session_uuid),
	VariableClient: (tenant_base_url: string, version_uuid: UUID, session_uuid: UUID) => new Variable(tenant_base_url, version_uuid, session_uuid),
	ContentClient: (tenant_base_url: string, version_uuid: UUID, session_uuid: UUID) => new Content(tenant_base_url, version_uuid, session_uuid),
}