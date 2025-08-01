"use client";

import React, { useState } from "react";
import GalleryItem from "../components/GalleryItem/GalleryItem";
import PageHeader from "../components/Layout/PageHeader/PageHeader";
import { GalleryData } from "@/lib/data/gallery";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const GalleryPage = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");

    // Get all unique categories from the GalleryData
    const categories = [
        "All",
        ...new Set(GalleryData.map((item) => item.category)),
    ];

    // Filter the gallery items based on the selected category
    const filteredGalleryItems =
        selectedCategory === "All"
            ? GalleryData
            : GalleryData.filter((item) => item.category === selectedCategory);

    return (
        <>
            <PageHeader title="Gallery" subtitle="Share some moments with us" />

            <section className="container mx-auto px-4 py-8">
                {/* Category Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-3 mb-8">
                    {categories.map((category) => (
                        <Button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            size={"lg"}
                            variant={
                                selectedCategory === category
                                    ? "default"
                                    : "outline"
                            }
                        >
                            {category}
                        </Button>
                    ))}
                </div>

                {/* Gallery Grid */}
                {/* Apply motion.div with layout to the grid container */}
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <>
                        {" "}
                        {/* AnimatePresence handles exit animations for its direct children */}
                        {filteredGalleryItems.length > 0 ? (
                            filteredGalleryItems.map((item) => (
                                <GalleryItem
                                    imageUrl={item.imageUrl}
                                    imageAlt={item.title + " Gallery image"}
                                    imageTitle={item.title}
                                    key={item.imageUrl} // Crucial for AnimatePresence to track items
                                />
                            ))
                        ) : (
                            <motion.p
                                key="no-items-message" // Unique key for the message
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="col-span-full text-center text-gray-600 text-xl py-10"
                            >
                                No images found for this category.
                            </motion.p>
                        )}
                    </>
                </div>
            </section>
        </>
    );
};

export default GalleryPage;
