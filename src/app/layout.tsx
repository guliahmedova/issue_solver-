import { SWRProvider } from "@/swr/SwrProvider";
import { theme } from "@/utils/theme";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import Loading from "./loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CssVarsProvider theme={theme} defaultMode="light">
          <SWRProvider>
            <Suspense fallback={<Loading />}>
              {children}
            </Suspense>
          </SWRProvider>
        </CssVarsProvider>
      </body>
    </html>
  );
}
