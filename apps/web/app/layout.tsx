import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import ConvexClientProvider from "@/components/providers";
import "@workspace/ui/globals.css";

const inter = Inter({
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "EzeBot Dashboard",
  description:
    "Internal dashboard for managing AI support conversations, knowledge sources, and resolution workflows.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClerkProvider>
          <ConvexClientProvider>{children}</ConvexClientProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
