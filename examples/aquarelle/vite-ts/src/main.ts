import "@octoai-apps/design-system/dist/style.css";
import { generateImage } from "./util/generateImage";
import { loadingSpinner } from "./components/loadingSpinner";
import { errorBanner } from "./components/errorBanner";

const initialPrompt = "a llama in a superhero costume";
let inputValue: string = "";
let generatedImage: string = "/images/llama-superhero.jpg";

// Helper function to correctly generate alt text
const getAltText = (prompt: string) => {
  return `generated image of '${prompt}' in watercolor style`;
};

// Add interactive part of app to DOM
document.querySelector<HTMLDivElement>("#generate-image")!.innerHTML = `
<div class="interactive">
  <form id="prompt">
      <label>
        <p>Enter prompt</p>
        <input 
          id="input-prompt" 
          type="text" 
          placeholder="${initialPrompt}" 
          value="${inputValue}" 
        />
      </label>
      <button id='generate-btn'>Generate</button>
  </form>
  <div class="result">
    ${loadingSpinner}
    <img 
      id="generated-img" 
      src="${generatedImage}" 
      alt="${getAltText(initialPrompt)}" 
    />
  </div>
</div>
`;

// Update input value as user types
const inputEl = document.getElementById("input-prompt");

const updateInputValue = (e: Event) => {
  const target = e?.target as HTMLInputElement;
  inputValue = target?.value;

  inputEl?.setAttribute("value", inputValue);
};

inputEl?.addEventListener("input", (e) => updateInputValue(e));

// Generate and update image `src` when user submits prompt
const promptFormEl = document.getElementById("prompt");
const generatedImgEl = document.getElementById("generated-img");

// Determine whether to show loading spinner
const loadingSpinnerEl = document.getElementById("loading-spinner");

const getGeneratedImage = async () => {
  // Set loading spinner to display while image is generating
  loadingSpinnerEl?.setAttribute("style", "display: flex");

  // If no user input, use `initialPrompt` to generate image
  if (inputValue === "") {
    inputValue = initialPrompt;
  }

  // Get base64 code for generated image using utility function
  const generatedImg = await generateImage(inputValue);

  // If an error returns, display error banner
  if (generatedImg.error) {
    const interactiveElem = document.querySelector(".interactive");

    console.error(generatedImg.error);

    const errorBannerHtml = errorBanner(
      "There was an error generating the image, please try again."
    );

    interactiveElem?.insertAdjacentHTML("beforeend", errorBannerHtml);

    // allow user to exit error banner
    const errorBannerElem = document.getElementById("error-banner");
    const closeBannerBtn = errorBannerElem?.querySelector("button");

    const closeBanner = () => {
      errorBannerElem?.remove();
    };

    closeBannerBtn?.addEventListener("click", closeBanner);

    return;
  }

  const generatedImgB64 = generatedImg?.images[0]?.image_b64;

  // Set image src to the generated base64
  generatedImgEl?.setAttribute(
    "src",
    "data:image/jpg;base64," + generatedImgB64
  );
  // Update alt text based on new prompt
  generatedImgEl?.setAttribute("alt", getAltText(inputValue));

  // Hide loading spinner once image is generated
  loadingSpinnerEl?.setAttribute("style", "display: none");
};

const handlePromptSubmit = (e: SubmitEvent) => {
  e.preventDefault();
  getGeneratedImage();
};

promptFormEl?.addEventListener("submit", handlePromptSubmit);
