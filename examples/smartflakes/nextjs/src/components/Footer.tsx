import Image from "next/image";

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <nav>
                    <ul>
                        <li className="with-icon">
                            <a href="#">
                                <Image src="/icons/github.svg" alt="Github Icon" width='18' height='18' />
                                View on Github
                            </a>
                        </li>
                        <li className="with-icon">
                            <a href="#">
                                <Image src="/icons/vercel.svg" alt="Github Icon" width='18' height='18' />
                                Deploy to Vercel
                            </a>
                        </li>
                    </ul>
                    <ul>
                        <li><a href="https://octo.ai/?utm_source=smartflakes" target="_blank">Powered by OctoAI</a></li>
                        <li><a href="https://octo.ai/legals/privacy-policy/?utm_source=smartflakes" target="_blank">Privacy Policy</a>
                        </li>
                        <li><a href="https://octo.ai/legals/terms-of-use/?utm_source=smartflakes" target="_blank">Terms of Use</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
};

export default Footer;
