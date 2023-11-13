import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  const data = await request.json()
  const response = await fetch(
    `${process.env.A1111_URL}/sdapi/v1/txt2img`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-OctoAI-Async": "1",
      },
      body: JSON.stringify({
        prompt: `watercolor painting ${data.prompt} . vibrant, beautiful, painterly, detailed, textural, artistic`,
        negative_prompt: "anime, photorealistic, 35mm film, deformed, glitch, low contrast, noisy",
        seed: -1,
        steps: 20,
        cfg_scale: 7,
        width: 1024,
        height: 1024
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
