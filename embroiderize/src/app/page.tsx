import GeneratedImage from "@/components/GeneratedImage";

export default function Home() {
  return (
    <main className="container">
      <div className="hero">
        <h1>
          Create your own <span>embroidered design</span>
        </h1>
      </div>
      <GeneratedImage />
      <p className="credit">
        Embroiderize uses{" "}
        <a
          href="https://huggingface.co/ostris/embroidery_style_lora_sdxl"
          target="_blank"
        >
          Embroidery Style SDXL LoRA
        </a>{" "}
        by{" "}
        <a href="https://ostris.com/" target="_blank">
          Jaret Burkett.
        </a>
      </p>
    </main>
  );
}
