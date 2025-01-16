import Providers from "@/components/providers";
import Main from "@/components/ui/main";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { PropsWithChildren } from "react";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Nuno's take home attempt",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} antialiased`}>
        <Main>
          <Providers>{children}</Providers>
        </Main>
      </body>
    </html>
  );
}
