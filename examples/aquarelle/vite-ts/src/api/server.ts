import express, { Express, Request, Response } from "express";
import ViteExpress from "vite-express";
import helmet from "helmet";
import dotenv from "dotenv";
// Using OctoAI TypeScript SDK to run inferences
// https://www.npmjs.com/package/@octoai/client
import { Client } from "@octoai/client";

dotenv.config();

const app: Express = express();

app.use(
  // Using https://expressjs.com/en/api.html#express.json to parse JSON requests
  express.json(),
  // Using https://helmetjs.github.io/ for easy server security
  helmet()
);

// Pass OctoAI Token into the client for authorization
const client = new Client(process.env.OCTOAI_TOKEN);

// When the local '/generate' endpoint recieves a POST request,
// it forwards the request to the OctoAI endpoint, preventing
// the token from being exposted to the browser.
app.post("/generate", async (req: Request, res: Response) => {
  try {
    const inferenceData = await client.inferAsync(
      "https://image.octoai.run/generate/sdxl",
      {
        ...req.body,
      }
    );

    // Check if `inferenceData` is ready
    let ready = await client.isFutureReady(inferenceData);

    // If `inferenceData` is not ready, keep trying endpoint until it is
    while (!ready) {
      ready = await client.isFutureReady(inferenceData);
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }

    // Once `inferenceData` is resolved, send back to client
    const inferenceOutput = await client.getFutureResult(inferenceData);
    res.send(inferenceOutput);
  } catch (error) {
    console.error(`Error generating image: ${error}`);
    res.status(500).send({ error: `${error}` });
  }
});

ViteExpress.listen(app, 3000, () =>
  console.log(`Server is listening at http://localhost:3000`)
);
