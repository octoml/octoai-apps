import { NextRequest, NextResponse } from "next/server"

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {

  const response = await fetch(
    "https://async.octoai.run/v1/requests/" + params.id,
    {
      headers: {
        Authorization: `Bearer ${process.env.OCTOAI_TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  )

  if (response.status !== 202 && response.status !== 200) {
    let error = await response.json()
    return NextResponse.json({ detail: error.detail }, { status: 500 })
  }

  const poll = await response.json()

  if (poll.status === "completed") {
    const res = await fetch(
      "https://async.octoai.run/v1/responses/" + params.id,
      {
        headers: {
          Authorization: `Bearer ${process.env.OCTOAI_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    )
    const comp = await res.json()
    const time = (comp.prediction_time_ms / 1000).toFixed(2)

    return NextResponse.json(
      {
        status: poll.status,
        id: params.id,
        image: comp.images[0].image_b64,
        time: time,
      },
      { status: 200 }
    )
  } else {
    return NextResponse.json(
      { status: poll.status, id: params.id },
      { status: 200 }
    )
  }
}
