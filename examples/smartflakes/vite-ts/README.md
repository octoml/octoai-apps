# Smartflakes - Vite + TS

Smartflakes demo in Vite + TypeScript.

## Getting Started

Clone the repo

```bash
git clone https://github.com/octoml/octoai-apps.git
```

Navigate to the Smartflakes Vite folder

```bash
cd octoai-apps/examples/smartflakes/vite-ts
```

## Add OctoAI token to `.env`

Create an [OctoAI token](https://octo.ai/docs/getting-started/how-to-create-octoai-api-token/) if you don't already have one.

Create a `.env` file in the folder you are working in (`octoai-apps/examples/smartflakes/vite-ts`) and add your token:

```bash
OCTOAI_TOKEN=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

## Developing

Install dependencies

```bash
yarn
```

Start the dev server

```bash
yarn dev
```

## Deploying

This monorepo is using the local `design-system` as a dependency. To deploy a singular demo, remove this dependency before deploying (if the `design-system` styling is desired, copy folder contents to individual demo and re-import with updated file paths).

<hr />

These demos utilize the [ViteExpress](https://github.com/szymmis/vite-express) library to prevent the OctoAI token from being exposed to the client.

You will need a host capable of running an [Express](https://expressjs.com/) server. See [ViteExpress docs](https://github.com/szymmis/vite-express?tab=readme-ov-file#-shipping-to-production) for more info.
