"use client";

import { Services } from "@/lib/data";
import { Card } from "@/components/ui/card";
import Container from "@/components/container";

const Service = () => {
    return (
        <section
            id="service"
            className="relative z-20 -mt-20 mb-10 px-2 md:px-0"
        >
            <Container className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-background shadow rounded-2xl   ">
                {Services.map((item, i) => (
                    <Card
                        key={i}
                        className=" transition-all shadow-none hover:shadow-xl group rounded-2xl p-6"
                    >
                        <Card className="aspect-square flex items-center justify-center w-14 h-14 bg-muted shadow-none border-none">
                            <span className="text-9xl group-hover:text-primary">
                                {item.imgSrc}
                            </span>
                        </Card>
                        <p className="text-2xl font-semibold group-hover:text-primary">
                            {item.country}
                        </p>
                        <p className="text-lg font-normal text-bluegray ">
                            {item.paragraph}
                        </p>
                    </Card>
                ))}
            </Container>
        </section>
    );
};

export default Service;
