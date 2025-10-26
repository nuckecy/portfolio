import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { NavigationWrapper } from "@/components/navigation-wrapper";
import { FooterWrapper } from "@/components/footer-wrapper";

export const metadata: Metadata = {
  title: "Product Designer Portfolio",
  description: "Case studies and design work",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=neue-montreal@400,500,600,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Work+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavigationWrapper />
          {children}
          <FooterWrapper />
        </ThemeProvider>
      </body>
    </html>
  );
}
