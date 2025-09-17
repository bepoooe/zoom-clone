import { ReactNode } from "react";
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";

import "@stream-io/video-react-sdk/dist/css/styles.css";
import "react-datepicker/dist/react-datepicker.css";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VibeMeet",
  description: "Modern Video Calling & Collaboration Platform",
  icons: {
    icon: "/icons/vibemeet-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <ClerkProvider
        appearance={{
          layout: {
            socialButtonsVariant: "iconButton",
            logoImageUrl: "/icons/vibemeet-logo.svg",
          },
          variables: {
            colorText: "#fff",
            colorPrimary: "#F97316",
            colorBackground: "#0A0A0A",
            colorInputBackground: "#1A1A1A",
            colorInputText: "#fff",
            colorDanger: "#EA580C",
            colorSuccess: "#F97316",
            colorWarning: "#FB923C",
            borderRadius: "12px",
          },
        }}
      >
        <body className={`${inter.className} bg-brand-black-950 text-white antialiased`}>
          <Toaster />
          {children}
        </body>
      </ClerkProvider>
    </html>
  );
}
