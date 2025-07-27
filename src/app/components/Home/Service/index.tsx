"use client";

import { Services } from "@/lib/data";
import { Card } from "@/components/ui/card";

const Service = () => {
    return (
        <section id="service" className="py-10">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
                {Services.map((item, i) => (
                    <Card
                        key={i}
                        className="bg-white transition-all shadow-none hover:shadow-xl group rounded-2xl  p-6 "
                    >
                        <Card className="aspect-square flex items-center justify-center w-14 h-14 bg-muted shadow-none border-none">
                            <span className="text-9xl group-hover:text-foreground text-primary">
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
            </div>
        </section>
    );
};

export default Service;
