import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
    Card,
    CardContent,
    CardDescription,
    CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React from "react";

const ReviewCard = ({
    review,
    name,
    position,
    imageUrl,
}: {
    review: string;
    name: string;
    position: string;
    imageUrl: string;
}) => {
    return (
        <div>
            <Card>
                <CardContent>
                    <CardDescription className="font-normal text-muted-foreground">
                        {review}
                    </CardDescription>
                </CardContent>
                <Separator />
                <CardContent className="flex justify-between items-start">
                    <div>
                        <CardTitle>{name}</CardTitle>
                        <CardDescription className="text-sm">
                            {position}
                        </CardDescription>
                    </div>
                    <div className="w-14">
                        <div className="overflow-hidden border-0 py-0 ">
                            <AspectRatio ratio={1} className=" ">
                                <Image
                                    src={imageUrl}
                                    alt={name + "Image"}
                                    fill
                                    className="object-cover rounded-full w-full h-full"
                                    sizes="(max-width: 1024px) 50vw, 40vw"
                                />
                            </AspectRatio>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default ReviewCard;
