"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Church_1 = require("../release/services/Church");
var Member_1 = require("../release/services/Member");
var church_client = new Church_1.Church();
var test_church_uuid = '4465b887-0ead-427f-bbeb-efd265765cbc';
// var config_file_url = '';
var base_path = '';
church_client.getChurches()
    .then(function (response) {
    response.data.forEach(function (church) {
        if (church.uuid == test_church_uuid) {
            church_client.getChurch(church.uuid)
                .then(function (response) {
                base_path = response.data.base_path;
                var member_client = new Member_1.Member(base_path, '08576067-3425-46e7-894c-4f15cbe2805e', '5c5b7877-9cdf-4d3f-8043-e4bb85b60858');
                member_client.getMe()
                    .then(function (response) {
                    console.log(response.data);
                    member_client.postAuthenticate("member01", "member01", 760076)
                        .then(function (response) {
                        console.log(response.data);
                        member_client.getMe()
                            .then(function (response) {
                            console.log(response.data);
                        });
                    });
                });
            });
        }
    });
});
