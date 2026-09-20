import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopMenu from "./components/layout/topmenu";
import { Playfair_Display } from 'next/font/google';
import Footer from "./components/layout/footer";

const playfair = Playfair_Display({
  subsets: ['latin'],
});


export const metadata: Metadata = {
  title: "holapartamenty.pl",
  description: "holapartamenty.pl",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <html
      lang="en"
      className={`${playfair} h-full antialiased`}
    >
      <head>

      </head> 

      <body className="min-h-full flex flex-col"  style={{
    fontFamily: `'Playfair Display', serif`,
  }}>
          <TopMenu />

        <main className="flex-1">{children}</main>

          <Footer />
      </body>
    </html>
  );
}
