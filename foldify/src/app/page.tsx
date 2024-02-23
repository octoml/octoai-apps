import GeneratedImage from "@/components/GeneratedImage";

export default function Home() {
  return (
    <main className="container">
      <div className="hero">
        <h1 className="heading">
          Create your own <span>beautiful origami piece</span>
        </h1>
      </div>

      <GeneratedImage />
    </main>
  );
}
