import { Client } from "@octoai/client";
import { NextRequest } from "next/server";

// Pass OctoAI Token into the client for authorization
const client = new Client(process.env.OCTOAI_TOKEN);

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    const inferenceData = await client.inferAsync(
      "https://image.octoai.run/generate/sdxl",
      {
        // I misspelled 'stippling' as 'stipping' but it works better
        prompt: `${data.prompt} dimensional, with light stipping at night, in dark deco style`,
        negative_prompt:
          "Blurry, distortion, low-res, poor quality, day, sunlight",
        style_preset: "base",
        checkpoint: "octoai:lcm_sdxl",
        sampler: "LCM",
        loras: { asset_01hpwp84x4ewf9gqq4qzbg1xgh: 1 },
        steps: 30,
        cfg_scale: 2,
        width: 1024,
        height: 1024,
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

    return Response.json({ ...inferenceOutput });
  } catch (error) {
    console.error(`Error generating image: ${error}`);
    return Response.error();
  }
}
