"use client"

import React, { useState } from "react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))

interface PredictionType {
  status: string
  id: string
  image?: string | null
  time?: number | null
}

export default function IndexPage() {
  const [prediction, setPrediction] = useState<PredictionType | null>(null)
  const [error, setError] = useState(null)
  const [progress, setProgress] = useState(0)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const prompt =
      (form.elements.namedItem("prompt") as HTMLInputElement)?.value ||
      "llama flakes, real tokens inside"
    const response = await fetch("/api/predictions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: prompt,
      }),
    })
    let prediction = await response.json()
    if (response.status !== 201) {
      setError(prediction.detail)
      return
    }
    setProgress(progress + 5)
    setPrediction(prediction)
    let i = 1
    while (
      prediction.status !== "completed" &&
      prediction.status !== "failed"
    ) {
      await sleep(1000)
      setProgress(progress + 5 * i)
      const response = await fetch("/api/predictions/" + prediction.id)
      prediction = await response.json()
      if (response.status !== 200) {
        setError(prediction.detail)
        return
      }
      setPrediction(prediction)
      i += 1
    }
    setProgress(0)
  }

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Create your own fun cereal box design.
        </h1>
        <Card className="sm:w-[600px] w-[350px]">
          <form onSubmit={handleSubmit}>
            <CardContent>
              <div className="grid w-full items-center">
                <div className="flex flex-col space-y-1.5">
                  <Label className="mt-4" htmlFor="name">
                    Prompt
                  </Label>
                  <div className="flex flex-row space-x-1.5">
                    <Input
                      id="prompt"
                      placeholder="llama flakes, real tokens inside"
                    />
                    <Button type="submit">Generate</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </form>
        </Card>
        {prediction && !prediction.image && (
          <div className="sm:w-[600px] w-[350px]">
            <Progress value={progress} />
          </div>
        )}
        {prediction && prediction.image && (
          <Card className="sm:w-[600px] w-[350px]">
            <CardContent>
              <Image
                src={`data:image/png;base64,${prediction.image}`}
                alt="CerealBox"
                width={500}
                height={731}
                className="w-full"
              />
            </CardContent>
            <CardFooter>
              <p>Generation time was {prediction.time} seconds.</p>
            </CardFooter>
          </Card>
        )}
      </div>
    </section>
  )
}
