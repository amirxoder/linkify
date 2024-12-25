"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import NoSSR from "react-no-ssr";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  const [mounted, setMounted] = React.useState<boolean>(false);

  React.useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);
  return (
    <NextThemesProvider {...props}>
      <NoSSR>{mounted && children}</NoSSR>
    </NextThemesProvider>
  );
}
