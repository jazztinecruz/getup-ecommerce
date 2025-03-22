import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Providers from "@/providers";
import Navbar from "@/components/navbar";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "getup",
  description: "Get your garments in getup",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <Providers>
          <div className="min-h-screen grid grid-rows-[auto,1fr] gap-6">
            <header className="px-6 lg:px-8">
              <Navbar />
            </header>
            <main className="px-6 lg:px-8">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
