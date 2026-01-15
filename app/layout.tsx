import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/UI/Header";
import Footer from "@/components/UI/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "US News Insider",
  description: "Us News Insider - Is a Daily News Portal which covers the Latest News ,Business and Technology Analysis and Insights",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}   antialiased min-h-screen  `}
      >


          <Header />
       
     
<main className="mb-10  mt-10 mx-auto min-h-dvh container">
    
    
        {children}
         
         </main>
        <Footer />
          <ToastContainer />
       
     
      </body>
    </html>
  );
}
