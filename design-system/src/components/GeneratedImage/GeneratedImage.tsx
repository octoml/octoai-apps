"use client";

import { FormEvent, useState } from "react";
import Spinner from "../Loading/Spinner";
import Image from "next/image";
import { getAltText } from "@/util/getAltText";
import ErrorBanner from "../ErrorBanner";
import Prompt from "../Prompt";

const GeneratedImage = () => {
  const initialPrompt = "llama flakes, real tokens inside";
  const [inputValue, setInputValue] = useState("");
  const [generatedImage, setGeneratedImage] = useState(
    "/images/llama-flakes.jpg"
  );
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [altText, setAltText] = useState(getAltText(initialPrompt));

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: inputValue || initialPrompt,
      }),
    });

    if (!response.ok) {
      setError(true);
    } else {
      setLoading(false);
      setError(false);
    }

    const inferenceOutput = await response.json();

    const generatedImgB64 = inferenceOutput?.images[0]?.image_b64;

    setGeneratedImage("data:image/jpg;base64," + generatedImgB64);
    setAltText(getAltText(inputValue || initialPrompt));
  };

  return (
    <div className="interactive">
      <Prompt
        formLabel="Enter prompt"
        btnText="Generate"
        initialPrompt={initialPrompt}
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleSubmit={handleSubmit}
      />
      <div className="result">
        {loading && <Spinner />}
        <Image
          id="generated-img"
          src={generatedImage}
          alt={altText}
          width="832"
          height="1216"
          priority
        />
      </div>
      {error && (
        <ErrorBanner bannerText="There was an error generating the image, please try again." />
      )}
    </div>
  );
};

export default GeneratedImage;
