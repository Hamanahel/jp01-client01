import { UUID } from "crypto"
import Church from "./Services/Church"
import Member from "./Services/Member"

export {
    Church,
    Member,
}

export default {
    ChurchClient: () => new Church(),
    MemberClient: (tenantBaseURL: string, version_uuid: UUID, sessionToken: UUID) => new Member(tenantBaseURL, version_uuid, sessionToken),
}