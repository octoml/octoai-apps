import GeneratedImage from "@/components/UserChat";

export default function Home() {
  return (
    <main className="container flex-height">
      <div className="hero">
        <h1>
          Create your own
          <span style={{ display: "block" }}>RAG chat application</span>
        </h1>
      </div>
      <GeneratedImage />
      <p className="disclaimer">
        Please evaluate model response quality independently before using these
        for production use cases.
      </p>
    </main>
  );
}
