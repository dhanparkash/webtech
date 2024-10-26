import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Advik It solutions",
  description: "Innovating tomorrows technology today, we empower businesses with cutting-edge IT solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
  <link rel="icon" type="image/svg+xml" href="/favicon.png" />
</head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
        <div className="min-h-[700px] bg-slate-100">{children}</div>
        <Footer/>
      </body>
    </html>
  );
}
