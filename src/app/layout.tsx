import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import ScrollToTop from "./components/ScrollToTop";
import "./globals.css";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer/Footer";

const font = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: "TWS",
    description: "Tws foundation",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${font.className}  antialiased`}>
                <Header />
                {children}
                <Footer />
                <ScrollToTop />
            </body>
        </html>
    );
}
