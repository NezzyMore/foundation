"use client"; // Add this line if this component is a Client Component

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion

const GalleryItem = ({
    imageUrl,
    imageAlt,
    imageTitle,
    imageDescription,
}: {
    imageUrl: string;
    imageAlt: string;
    imageTitle: string;
    imageDescription?: string;
}) => {
    // Define animation variants for the GalleryItem
    const itemVariants = {
        hidden: { opacity: 0 }, // Start fully transparent
        visible: { opacity: 1 }, // Animate to full opacity
        exit: { opacity: 0 }, // Animate out to fully transparent
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                {/* Apply motion.div to the main container for animations */}
                <motion.div
                    variants={itemVariants} // Use the defined variants
                    initial="hidden" // Initial animation state
                    animate="visible" // Animation state when component is mounted/visible
                    exit="exit" // Animation state when component is removed (requires AnimatePresence in parent)
                    layout // Enables smooth layout transitions (position changes in grid)
                    whileHover={{
                        scale: 1.03,
                        boxShadow:
                            "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                    }} // Hover effect
                    transition={{ type: "spring", stiffness: 300, damping: 20 }} // Smooth transition for entry/exit/hover
                    className="group transition-all ease-linear cursor-pointer"
                >
                    {/* Image section */}
                    <Card className="overflow-hidden border-0 py-0 group-hover:shadow-xl">
                        <AspectRatio ratio={1} className="bg-muted">
                            <Image
                                src={imageUrl}
                                alt={imageAlt}
                                fill
                                className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                                sizes="(max-width: 1024px) 50vw, 40vw"
                            />
                        </AspectRatio>
                    </Card>
                    <div className="mt-2">
                        <CardTitle className="text-base group-hover:text-primary">
                            {imageTitle}
                        </CardTitle>
                        {imageDescription && (
                            <CardDescription>
                                {imageDescription}
                            </CardDescription>
                        )}
                    </div>
                </motion.div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[800px] p-0 overflow-hidden">
                <DialogHeader className="sr-only">
                    <DialogTitle>{imageTitle}</DialogTitle>
                    <DialogDescription>
                        Full-size view of {imageAlt}
                    </DialogDescription>
                </DialogHeader>
                <div className="relative w-full h-[97vh]">
                    <Image
                        src={imageUrl}
                        alt={imageAlt}
                        fill
                        className="object-contain"
                    />
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default GalleryItem;
