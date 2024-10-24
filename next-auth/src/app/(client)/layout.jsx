import Header from "./header";
import SessionWrapper from "./_components/SessionWrapper";
import Providers from "./providers";

import localFont from "next/font/local";
import "../globals.css";

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
  title: "NextAuth",
  description: "NextAuth App",
};

export default async function RootLayout({ children }) {
  return (
    <SessionWrapper>
      <html lang="en" suppressHydrationWarning={true}>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Providers>
            <Header />
            <main className="min-h-[calc(100vh-66px)] bg-white dark:bg-gray-700 dark:text-teal-500">
              {children}
            </main>
          </Providers>
        </body>
      </html>
    </SessionWrapper>
  );
}
