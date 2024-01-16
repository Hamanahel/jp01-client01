import { Member } from '../release/lib.js';

const tenantBaseURL = 'https://tenant-00002-efd265765cbc.hamanahel.test';
const member = new Member(tenantBaseURL, '5c5b7877-9cdf-4d3f-8043-e4bb85b60858');

member.getMe()
    .then(() => {
        member.postSetMember("abey2397")
            .then(() => {
                member.postVerifyPassword("Aksa@2006");
            })
            .then(() => {
                setInterval(() => {
                    member.getMe();
                }, 1000 * 5);
            });
    });
