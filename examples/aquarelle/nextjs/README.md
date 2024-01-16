# Aquarelle - Next.js

Aquarelle demo in Next.js + TypeScript.

## Getting Started

Clone the repo

```bash
git clone https://github.com/octoml/octoai-apps.git
```

Navigate to the Aquarelle Next.js folder

```bash
cd octoai-apps/examples/aquarelle/nextjs
```

## Add OctoAI token to `.env`

Create an [OctoAI token](https://octo.ai/docs/getting-started/how-to-create-octoai-api-token/) if you don't already have one.

Create a `.env` file in the folder you are working in (`octoai-apps/examples/aquarelle/nextjs`) and add your token:

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

The easiest way to deploy is by using [Vercel](https://vercel.com/docs/frameworks/nextjs), but you can use [any host](https://nextjs.org/docs/app/building-your-application/deploying#self-hosting) that supports Node.js.
