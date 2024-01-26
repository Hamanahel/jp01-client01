import { UUID } from "crypto"
import Church from "./Church"
import Member from "./Member"

export {
    Church,
    Member,
}

export default {
    Church: () => new Church(),
    Member: (tenantBaseURL: string, version_uuid: UUID, sessionToken: UUID) => new Member(tenantBaseURL, version_uuid, sessionToken),
}