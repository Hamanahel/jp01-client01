import { randomUUID } from 'crypto';
import { Church } from '../release/services/Church';
import { Member } from '../release/services/Member';

const church_client = new Church();

const test_church_uuid = '4465b887-0ead-427f-bbeb-efd265765cbc';
const test_api_client_version_uuid = '08576067-3425-46e7-894c-4f15cbe2805e';
const test_session_uuid = randomUUID();

const test_member_username = 'member01';
const test_member_password = 'member01';

// var config_file_url = '';
var base_path = '';

church_client.getChurches()
    .then((response: any) => {
        response.data.forEach((church: any) => {
            if (church.uuid == test_church_uuid) {
                church_client.getChurch(church.uuid)
                    .then((response: any) => {
                        base_path = response.data.base_path;
                        const member_client = new Member(base_path, test_api_client_version_uuid, test_session_uuid);
                        member_client.getMe()
                            .then((response: any) => {
                                console.log(response.data);
                                member_client.postAuthenticate(test_member_username, test_member_password, 760076)
                                    .then((response: any) => {
                                        console.log(response.data);
                                        member_client.getMe()
                                            .then((response: any) => {
                                                console.log(response.data);
                                            });
                                    });
                            });
                    });
            }
        });
    });
