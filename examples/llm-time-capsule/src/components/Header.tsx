import Image from "next/image";
import DatePicker from "react-date-picker";

const Header = () => {
  return (
    <header className="container">
      <div>
        <div className="left">
          <a href="/">⏳ LLM Time Capsule</a>
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
        <div className="right">
          <DatePicker />
        </div>
      </div>
    </header>
  );
};

export default Header;
