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

const BlogItem = ({
    title,
    description,
    imageUrl,
}: {
    title: string;
    description: string;
    imageUrl: string;
}) => {
    return (
        <Link href={`/blog/${slugify(title)}`}>
            <Card className="group shadow-none hover:shadow-xl transition-all ease-linear p-2">
                {/* imae section */}
                <CardHeader className="mb-0 px-0">
                    <Card className="overflow-hidden border-0 shadow-lg py-0">
                        <AspectRatio ratio={1} className="bg-muted">
                            <Image
                                src={imageUrl}
                                alt="Teresia Waihuini foundation"
                                fill
                                className="object-cover rounded-lg"
                                sizes="(max-width: 1024px) 50vw, 40vw"
                            />
                        </AspectRatio>
                    </Card>
                    <div className="-mt-6 z-30 flex justify-end pr-4 ">
                        <Button>4 Min Read</Button>
                    </div>
                </CardHeader>

                <CardContent className="-mt-4 px-0">
                    <CardTitle className="text-base md:text-lg group-hover:text-primary">
                        {title}
                    </CardTitle>
                    <CardDescription className="mt-1 truncate">
                        {description}
                    </CardDescription>
                </CardContent>
            </Card>
        </Link>
    );
};

export default BlogItem;
