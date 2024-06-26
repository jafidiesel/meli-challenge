# Before start
Run `npm run prepare-env`
Set PORT and API_URL values on .env.dev and .env.prod

# How to test
Run `npm run test`

# How to run
Make sure to use node v12 & npm v6
Run `npm run start`

## Endpoints

BASE_URL = "localhost:3000"

#### [GET] {BASE_URL}/item/:id
- response:
```
HTTP 200
{
    “author”: {
        “name”: string
        “lastname”: string
    },
    “item”: {
        "id": string,
        "title": string,
        "price": {
            "currency": string,
            "amount": Number,
            "decimals": Number,
        },
        “picture”: string,
        "thumbnail": string,
        "condition": string,
        "free_shipping": boolean,
        "description": string,
    }
}
```

#### [GET] {BASE_URL}/items?q=:query&limit=:number&offset=:number
- query param:
```
    query: string
    limit: number (optional)
    offset: number (optional)
```
- response:
```
HTTP 200
{
    “author”: {
        “name”: string
        “lastname”: string
    },
    "categories": string[],
    “items”: [{
        "id": string,
        "title": string,
        "price": {
            "currency": string,
            "amount": Number,
            "decimals": Number,
        },
        “picture”: string,
        "condition": string,
        "free_shipping": boolean,
        "state_address": string | null
    },
    {...}]
}
```
