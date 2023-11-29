# foodbaby-api

## Prereq

* Make sure to have Docker installed
* Have a supabase login
* `npm install`

## Development

1. Launch docker
2. Login to supabase `supabase login`
3. Start supabase `supabase start` -- this should seed the database
4. Rename `.env.template` to `.env` and fill with variables (API Key should start with `ey`..., Project ID should be like `http://127.0.0.1:54321`)
5. Run `node server.js``
6. Navigate to `http://127.0.0.1:54321` to view local Supabase
7. Query `localhost:8080/api/food`
