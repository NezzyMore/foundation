import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const PageHeader = ({
    title,
    subtitle,
    image,
}: {
    title: string;
    subtitle?: string;
    image?: string;
}) => {
    return (
        <section
            className={cn(
                !image && "h-[50vh]",
                " py-10   flex flex-col items-center justify-center bg-muted"
            )}
        >
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    <h1 className="text-5xl font-semibold">{title}</h1>
                    {subtitle && (
                        <p className="text-muted-foreground text-xl mt-2">
                            {subtitle}
                        </p>
                    )}
                </div>

                {image && (
                    <Card className="overflow-hidden shadow-none border-none border-0 py-0 w-72">
                        <AspectRatio ratio={1} className="bg-muted">
                            <Image
                                src={image}
                                alt="Teresia Waihuini portrait"
                                fill
                                className="object-contain rounded-lg"
                                sizes="(max-width: 1024px) 50vw, 40vw"
                            />
                        </AspectRatio>
                    </Card>
                )}
            </div>
        </section>
    );
};

export default PageHeader;
