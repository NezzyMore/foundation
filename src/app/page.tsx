import { Metadata } from "next";
import Hero from "./components/Home/Hero";
import Service from "./components/Home/Service";
import About from "./components/Home/About/About";
import Blog from "./components/Home/Blog/Blog";
import Review from "./components/Home/Review";
import CtaSection from "./components/Home/cta-section";
import WhatWeDo from "./components/Home/WhatWeDo/WhatWeDo";
import VideoSection from "./components/Home/VideoSection/VideoSection";

export const metadata: Metadata = {
    title: "TWS",
};

export default function Home() {
    return (
        <main>
            <Hero />
            <Service />
            <About />
            <WhatWeDo />
            <VideoSection />

            <Review />
            <CtaSection />

            <Blog />
        </main>
    );
}
