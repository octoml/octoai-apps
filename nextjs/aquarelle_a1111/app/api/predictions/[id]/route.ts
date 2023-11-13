import { NextRequest, NextResponse } from "next/server"

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const response = await fetch(
    "https://async.octoai.run/v1/requests/" + params.id,
    {
      headers: {
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
          "Content-Type": "application/json",
        },
      }
    )
    const comp = await res.json()
    const time = res.headers.get('x-process-time')

    return NextResponse.json(
      {
        status: poll.status,
        id: params.id,
        image: comp.images[0],
        time: time,
        params: comp.parameters,
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
