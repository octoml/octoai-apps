import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <nav>
          <ul>
            <li className="with-icon">
              <a
                href="https://github.com/octoml/octoai-apps/tree/main/aquarelle"
                target="_blank"
              >
                <Image
                  src="/icons/github.svg"
                  alt="Github Icon"
                  width="18"
                  height="18"
                />
                View on Github
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="https://octo.ai/?utm_source=aquarelle" target="_blank">
                Powered by OctoAI
              </a>
            </li>
            <li>
              <a
                href="https://octo.ai/legals/privacy-policy/?utm_source=aquarelle"
                target="_blank"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="https://octo.ai/legals/terms-of-use/?utm_source=aquarelle"
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
