# FuturisticExample

## Experience

NX Console extension fails to stay up to date with workspace configuration (still seeing removed libraries and not seeing new apps)

Unable to switch from "cjs" to "esm" format in apollo app. Prevents using top-level await and other es2022 features

Can't configure build to use the prisma.schema file, instead doing a hack to copy it after the serve finishes clearing the dist directory
https://github.com/prisma/prisma/issues/10433
https://github.com/prisma/prisma/issues/14033

## Development server

### Client

- Run `npx nx generate-schema client` to use codegen to generate types from tsx queries

- Run `npx nx serve client` for a FE dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

### Server

- Run `npx nx prisma-generate apollo` to generate prisma/pothos types

- Run `npx nx prisma-push apollo` to configure the sqlite db with the schema

- Run `npx nx startup apollo` to start the backend server (and apply the hack). You can view the Apollo Studio UI at http://localhost:8080/

## Understand this workspace

Run `nx graph` to see a diagram of the dependencies of the projects.

## Remote caching

Run `npx nx connect-to-nx-cloud` to enable [remote caching](https://nx.app) and make CI faster.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.
