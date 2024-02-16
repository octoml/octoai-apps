import type { Metadata } from "next";
import "@octoai/demo-design-system/dist/styles.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const siteTitle = "Embroiderize | Powered by OctoAI";
const siteDescription = "Create your own embroidered design";
const socialShare = "/images/social-share.png";

export const metadata: Metadata = {
  title: siteTitle,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    images: [{ url: socialShare }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [socialShare],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}