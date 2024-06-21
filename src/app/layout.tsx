import type { Metadata } from "next";
import { JetBrains_Mono} from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const JetBrainsMono = JetBrains_Mono(
  { 
    subsets: ["latin"], 
    weight: ["400","500","600","700","800"], 
    variable: "--font-jetbrainsMono" 
  }
);

export const metadata: Metadata = {
  title: "rinku-portfolio",
  description: "portfolio application build by nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        className={JetBrainsMono.variable}
        >
          <StairTransition />
          <Header />
          <PageTransition>
            {children } 
          </PageTransition>
      </body>
    </html>
  );
}
