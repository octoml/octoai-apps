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
        negative_prompt: "Blurry, distortion, low-res, poor quality",
        style_preset: "base",
        sampler: "DPM_PLUS_PLUS_2M_KARRAS",
        loras: {cereal_box_sdxl_v1: 1},
        steps: 20,
        cfg_scale: 7.5,
        use_refiner: true,
        width: 832,
        height: 1216
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
