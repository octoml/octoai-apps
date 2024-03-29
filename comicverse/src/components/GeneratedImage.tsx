"use client";

import { FormEvent, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import Image from "next/image";
import { getAltText } from "@/util/getAltText";
import ErrorBanner from "./ErrorBanner";

const GeneratedImage = () => {
  const initialPrompt = "a cat aboard a rocket";
  const [inputValue, setInputValue] = useState("");
  const [generatedImage, setGeneratedImage] = useState(
    "/images/cat-aboard-rocket.jpg"
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
      <form id="prompt" onSubmit={handleSubmit}>
        <label>
          <p>Enter prompt</p>
          <input
            id="input-prompt"
            type="text"
            placeholder={initialPrompt}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </label>
        <button id="generate-btn" className="button">
          Generate
        </button>
      </form>
      <div className="result">
        {loading && <LoadingSpinner />}
        <Image
          id="generated-img"
          src={generatedImage}
          alt={altText}
          width="1024"
          height="1024"
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
