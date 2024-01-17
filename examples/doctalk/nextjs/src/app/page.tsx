import GeneratedImage from "@/components/GeneratedImage";

export default function Home() {
  return (
    <main className="container">
      <div className="hero">
        <h1>Create your own fun <span>cereal box design</span></h1>
      </div>
      <GeneratedImage />
      <p className='credit'>
        Smartflakes uses <a href="https://huggingface.co/ostris/super-cereal-sdxl-lora"
          target="_blank">SuperCereal SDXL LoRA</a> by <a href="https://ostris.com/" target="_blank">Jaret Burkett.</a>
      </p>
    </main>
  )
}
