# Smartflakes

[Try out](https://smartflakes.octo.ai/) Smartflakes for yourself!

Smartflakes demo in Next.js + TypeScript.

Demos utilize our [demo design system](https://github.com/octoml/demo-design-system) that is easy to swap out for your own styling.

## Tech stack

Our demo tech stack includes

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [OctoAI Typescript SDK](https://www.npmjs.com/package/@octoai/client)

## Getting Started

Clone the repo

```bash
git clone https://github.com/octoml/octoai-apps.git

```

Navigate to the demo you want to use

```bash
cd octoai-apps/smartflakes
```

## Add OctoAI token to `.env`

Create an [OctoAI token](https://octo.ai/docs/getting-started/how-to-create-an-octoai-access-token) if you don't already have one.

Create a `.env` file in the folder you are working in (`octoai-apps/smartflakes`) and add your token:

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

[Deploy to Vercel](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Foctoml%2Foctoai-apps%2Ftree%2Fmain%2Fsmartflakes&env=OCTOAI_TOKEN&envDescription=Create%20an%20OctoAI%20token%20if%20you%20don't%20already%20have%20one.&envLink=https%3A%2F%2Focto.ai%2Fdocs%2Fgetting-started%2Fhow-to-create-an-octoai-access-token&project-name=my-smartflakes-app&repository-name=my-smartflakes-app)

The easiest way to deploy is by using [Vercel](https://vercel.com/docs/frameworks/nextjs), but you can use [any host](https://nextjs.org/docs/app/building-your-application/deploying#self-hosting) that supports Node.js.
