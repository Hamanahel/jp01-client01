# Hamanahel JS Client

## Usage
### Installation
```npm install @hamanahel/client```
### Import
```
import {
    Menu,
    Church,
    Member,
    Variable
} from '@hamanahel/client';
```
or
```
import hm_client from "@hamanahel/client";
```
### Initialize
```
const menu_client = new Menu();
const church_client = new Church();
const member_client = new Member();
const variable_client = new Variable();
```
or
```
const menu_client = new hm_client.Menu();
const church_client = new hm_client.Church();
const member_client = new hm_client.Member();
const variable_client = new hm_client.Variable();
```
## Misc
### Disclaimer
```
This is a first attempt. There will be breaking changes till v1.0.0.
```

##Methods
```
- Church
- - getChurches()
- - getChurch(uuid: string)
- Auth
- - GetBypassToken()
- - Authenticate(username: string, password: string, otp_string?: string)
- - Fetch2FAOptions(username: string, password: string)
- - Initiate2FA(username: string, password: string, mode: string)
- - deleteSession()
- Content
- - getPosts(page: number = 1, limit: number = 10)
- - getPost(slug: string)
- - getPage(slug: string)
- Member
- - getMe()
- Menu
- - getAll() {
- - getSlug(slug: string)
- Variable
- - getBoolean(key: string): any
- - getString(key: string): string
- - getInteger(key: string): number
```