import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <nav>
          <ul>
            <li className="with-icon">
              <a
                href="https://github.com/octoml/octoai-apps/tree/main/darkdeco"
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
            <li className="with-icon">
              <a
                href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Foctoml%2Foctoai-apps%2Ftree%2Fmain%2Fdarkdeco&env=OCTOAI_TOKEN&envDescription=Create%20an%20OctoAI%20token%20if%20you%20don't%20already%20have%20one.&envLink=https%3A%2F%2Focto.ai%2Fdocs%2Fgetting-started%2Fhow-to-create-an-octoai-access-token&project-name=my-darkdeco-app&repository-name=my-darkdeco-app"
                target="_blank"
              >
                <Image
                  src="/icons/vercel.svg"
                  alt="Vercel Icon"
                  width="18"
                  height="18"
                />
                Deploy to Vercel
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="https://octo.ai/?utm_source=darkdeco" target="_blank">
                Powered by OctoAI
              </a>
            </li>
            <li>
              <a
                href="https://octo.ai/legals/privacy-policy/?utm_source=darkdeco"
                target="_blank"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="https://octo.ai/legals/terms-of-use/?utm_source=darkdeco"
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
