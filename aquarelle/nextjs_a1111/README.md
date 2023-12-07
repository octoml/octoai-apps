# Aquarelle

## Getting started

1. Install [Docker](https://docs.docker.com/engine/install/)
2. Create an account and get a token from [OctoAI](https://octoai.cloud/)

## Launch A1111 container on an OctoAI endpoint

1. Log into your OctoAI account https://octoai.cloud/
2. Once you’re logged in, go to Compute Service -> My Endpoints -> Create a Custom Endpoint. 
3. Name your endpoint
4. Use the following container image: `258175030240.dkr.ecr.us-east-1.amazonaws.com/template-images:sdwebui-tools-v0.1.2`. This will give you access to Automatic 1111 Web UI version 0.1.6.
5. Enable public access
6. Select the `medium` hardware tier. You can select the `large` one which is faster but also costs more.
7. Under “configure autoscaling” set min and max replicas to 1
8. Leave the rest of the fields to their default values and launch your endpoint hy hitting Create!

You will be billed based on how long this endpoint is up and running, to pause your endpoint and stop being billed, you can select the endpoint you launched, then hit “Pause Endpoint”.


* You can run A1111 Web UI in your browser by pasting that URL in your browser.
* You can also access A1111 Web UI FastAPI documentation by adding `/docs` to that URL in your browser.

Save the endpoint URL, you'll need it later in the step that requires you to pass in the `$A1111_URL``.

## Run the app

1. Build docker image
```bash
docker build -t aquarelle .
```

2. Run docker image
```bash
docker run --rm -p 3000:3000 -e A1111_URL=$A1111_URL -it aquarelle
```

## Run without Docker

1. Install [bun](https://bun.sh/docs/installation)
2. Install packages `bun install`
3. Run development `bun run dev`
