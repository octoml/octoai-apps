import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <nav>
          <ul>
            <li>
              <a href="https://octo.ai/?utm_source=llm-time-capsule" target="_blank">
                Brought to you by OctoAI
              </a>
            </li>
            <li>
              <a
                href="https://octo.ai/legals/privacy-policy/?utm_source=llm-time-capsule"
                target="_blank"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="https://octo.ai/legals/terms-of-use/?utm_source=llm-time-capsule"
                target="_blank"
              >
                Terms of Use
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
