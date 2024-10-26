import localFont from "next/font/local";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import Providers from "./providers";
import "@/app/globals.css";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Mindmap Flow",
  description: "Mindmap Flow - Công cụ xây dựng sơ đồ tư duy mạnh mẽ",
  openGraph: {
    title: "Mindmap Flow",
    description: "Mindmap Flow - Công cụ xây dựng sơ đồ tư duy mạnh mẽ",
  },
  icons: {
    icon: "https://fullstack-nodejs.fullstack.edu.vn/assets/f8_icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Providers>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Header />
          <main>{children}</main>
          <Footer />
        </body>
      </Providers>
    </html>
  );
}
