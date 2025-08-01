import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { slugify } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const WhatWeDoCard = ({
    title,
    description,
    imageUrl,
}: {
    title: string;
    description: string;
    imageUrl: string;
}) => {
    return (
        <Card className="group shadow-none hover:shadow-xl transition-all ease-linear p-0 px-0 pb-4 overflow-hidden">
            {/* imae section */}
            <CardHeader className="mb-0 p-0">
                <div className="overflow-hidden border-0 shadow-lg py-0">
                    <div className="bg-muted aspect-video relative">
                        <Image
                            src={imageUrl}
                            alt="Teresia Waihuini foundation"
                            fill
                            className="object-cover group-hover:scale-110 transition "
                            sizes="(max-width: 1024px) 50vw, 40vw"
                        />
                    </div>
                </div>
            </CardHeader>

            <CardContent className="-mt-4">
                <CardTitle className="text-base md:text-2xl group-hover:text-primary">
                    {title}
                </CardTitle>
                <CardDescription className="mt-1 text-base">
                    {description}
                </CardDescription>
            </CardContent>
        </Card>
    );
};

export default WhatWeDoCard;
