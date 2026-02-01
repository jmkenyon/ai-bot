import { Inter } from "next/font/google";

import "@workspace/ui/globals.css";
import { Providers } from "@/components/providers";
import { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eze AI Bot",
  description:
    "AI-powered support chat for quick answers from your company knowledge base.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
