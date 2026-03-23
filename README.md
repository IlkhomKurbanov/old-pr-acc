# old-pr-acc

Minimal Vite React app that redirects the old private-account domain to a new URL.

## Env

Copy `.env.example` to `.env` if you want to override the defaults.

- `VITE_REDIRECT_URL`: target URL to redirect to
- `VITE_PRESERVE_PATH`: when `true`, keeps the incoming pathname

By default the app redirects to `https://aba-doma.ru` and keeps query params and hash.
