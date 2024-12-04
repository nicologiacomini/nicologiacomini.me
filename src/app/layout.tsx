import NavBar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import 'katex/dist/katex.min.css';
import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Nicolò Giacomini",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicons/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicons/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicons/apple-touch-icon.png" />
        <meta name="google-site-verification" content={process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION} />
      </head>
      <body
        className="antialiased bg-[url('/background/light.png')] dark:bg-[url('/background/dark.jpg')] text-slate-900 dark:text-gray-100 h-full"
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
            <main className="flex flex-col max-w-screen-sm mx-auto min-h-[70vh] mb-10 text-[Onest-Regular]">
              {children}
            </main>
            <Footer />
            <NavBar />
        </ThemeProvider>
      </body>
    </html>
  );
}