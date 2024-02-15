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
        prompt: data.prompt,
        negative_prompt: "",
        style_preset: "comic-book",
        sampler: "DPM_PLUS_PLUS_2M_KARRAS",
        steps: 25,
        cfg_scale: 12,
        width: 1024,
        height: 1024,
        use_refiner: true,
        high_noise_frac: 0.8,
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
