# Aquarelle

## Getting started

1. Install [Docker](https://docs.docker.com/engine/install/)
2. Create an account and get a token from [OctoAI](https://octoai.cloud/)

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
