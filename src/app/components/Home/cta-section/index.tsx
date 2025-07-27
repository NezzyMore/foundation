"use client"; // This component will be interactive, so it needs to be a client component

import React from "react";
import { Button } from "@/components/ui/button"; // Assuming Shadcn's Button component is available here
import Link from "next/link";

const CtaSection = () => {
    return (
        <section className="bg-muted py-16 md:py-24">
            <div className="container mx-auto px-4 text-center max-w-4xl">
                <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
                    Join Us in Making a Lasting Impact
                </h2>
                <p className="text-lg sm:text-xl mb-10 opacity-90 max-w-2xl mx-auto">
                    Every contribution, big or small, helps us continue the
                    legacy of Teresia Waihuini. Partner with us to empower
                    communities, protect our environment, and foster leadership.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button
                        className=" transition-all duration-300 transform hover:scale-105"
                        size="lg" // Shadcn button size prop
                        asChild
                    >
                        <Link href="/about">Find out more</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default CtaSection;
