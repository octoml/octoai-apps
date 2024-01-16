# OctoAI Apps

A collection of OctoAI-based demos.

Demos utilize a common design system that is easy to swap out for your own styling.

## Languages

Demos are currently available in:

- Vite
- Next.js

All demos use TypeScript.

<em>Want a demo in another framework? Feel free to open an [issue](https://github.com/octoml/octoai-apps/issues).</em>

## Getting Started

Clone the repo

```bash
git clone https://github.com/octoml/octoai-apps.git

```

Navigate to the demo + framework you want to use

```bash
cd octoai-apps/examples/${DEMO_FOLDER}/${FRAMEWORK}
```

## Add OctoAI token to `.env`

Create an [OctoAI token](https://octo.ai/docs/getting-started/how-to-create-octoai-api-token/) if you don't already have one.

Create a `.env` file in the folder you are working in (ie `octoai-apps/examples/aquarelle/nextjs`) and add your token:

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

### Vite + TS

These demos utilize the [ViteExpress](https://github.com/szymmis/vite-express) library to prevent the OctoAI token from being exposed to the client.

You will need a host capable of running an [Express](https://expressjs.com/) server. See [ViteExpress docs](https://github.com/szymmis/vite-express?tab=readme-ov-file#-shipping-to-production) for more info.

### Next.js

The easiest way to deploy is by using [Vercel](https://vercel.com/docs/frameworks/nextjs), but you can use [any host](https://nextjs.org/docs/app/building-your-application/deploying#self-hosting) that supports Node.js.
