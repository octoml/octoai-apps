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
        prompt: `${data.prompt}, with bright colors and thick black outlines in a comic book scene`,
        negative_prompt:
          "Blurry photo, distortion, low-res, poor quality, gradient, complex",
        style_preset: "comic-book",
        sampler: "LCM",
        checkpoint: "octoai:lcm_sdxl",
        steps: 30,
        cfg_scale: 1.4,
        width: 1024,
        height: 1024,
        use_refiner: false,
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
