# Aquarelle

## Getting started

1. Install [Docker](https://docs.docker.com/engine/install/)
2. Create an account on [OctoAI](https://octoai.cloud/)

## Get an OctoAI token

Once you've created an account on OctoAI, go to [https://octoai.cloud/](https://octoai.cloud/):
1. Click on your account icon in the top right corner.
2. Under API Tokens, generate a new token after you provide a high level description (e.g. `aquarelle_demo`).
3. Save your API token in your password manager, or add it to your environment with `export OCTOAI_TOKEN=...`.

## Run the app

1. Build docker image
```bash
docker build -t aquarelle .
```

2. Run docker image
```bash
docker run --rm -p 4000:4000 -e OCTOAI_TOKEN=$OCTOAI_TOKEN -it aquarelle
```

## Run without Docker

1. Install [bun](https://bun.sh/docs/installation)
2. Install packages `bun install`
3. Run development `bun run dev`
