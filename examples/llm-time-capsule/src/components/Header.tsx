import Image from "next/image";

const Header = () => {
  return (
    <header className="container">
      <div>
        <div className="left">
          <a href="/">⏳ LLM Time Capsule</a>
        </div>
        <div className="right">
          <a href="https://octo.ai/?utm_source=llm-time-capsule" target="_blank">
            <span>by</span>
            <Image
              src="/icons/octo.svg"
              alt="OctoAI Icon"
              width="22"
              height="24"
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
