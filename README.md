https://nextjs.org/docs/pages/building-your-application/configuring/environment-variables

- `process.env`
- `.env.$(NODE_ENV).local`
- `.env.local` (Not checked when `NODE_ENV` is `test`.)
- `.env.$(NODE_ENV)`
- `.env`

For example, if `NODE_ENV` is development and you define a variable in both
`.env.development.local` and `.env`, the value in `.env.development.local` will be used.

Good to know: The allowed values for `NODE_ENV` are `production`, `development`, and `test`.

If the environment variable `NODE_ENV` is unassigned, Next.js automatically
assigns `development` when running the `next dev` command, or `productio`n for all other commands.
