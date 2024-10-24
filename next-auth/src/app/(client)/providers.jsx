import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemeProvider } from "next-themes";

export default function Providers({ children }) {
  return (
    <NextUIProvider>
      <NextThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem={true}
      >
        {children}
      </NextThemeProvider>
    </NextUIProvider>
  );
}
