import { NextUIProvider } from "@nextui-org/react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ThemeProvider as NextThemeProvider } from "next-themes";

export default async function Providers({ children }) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  return (
    <NextIntlClientProvider messages={messages}>
      <NextUIProvider>
        <NextThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
        >
          {children}
        </NextThemeProvider>
      </NextUIProvider>
    </NextIntlClientProvider>
  );
}
