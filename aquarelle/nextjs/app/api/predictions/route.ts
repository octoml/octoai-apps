import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  const data = await request.json()
  const response = await fetch(
    "https://image.octoai.run/generate/sdxl",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OCTOAI_TOKEN}`,
        "Content-Type": "application/json",
        "X-OctoAI-Async": "1",
      },
      body: JSON.stringify({
        prompt: data.prompt,
        negative_prompt: "",
        style_preset: "Watercolor",
        sampler: "LCM",
        checkpoint: "octoai:lcm_sdxl",
        steps: 4,
        cfg_scale: 1.3,
        width: 1024,
        height: 1024,
      }),
    }
  )

  if (response.status !== 201) {
    let error = await response.json()
    return NextResponse.json({ detail: error.detail }, { status: 500 })
  }

  const prediction = await response.json()

  return NextResponse.json(
    { status: "pending", id: prediction.response_id },
    { status: 201 }
  )
}
