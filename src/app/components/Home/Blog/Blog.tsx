import React from "react";
import BlogItem from "./BlogItem";
import { BlogPosts } from "@/lib/data/blog";
import SectionHeading from "@/components/SectionHeading";
import Container from "@/components/container";

const Blog = () => {
    return (
        <section className="py-10">
            <Container className="">
                <SectionHeading
                    title="From our Blog"
                    subtitle="Stories of change, impact, and hope from our work on the ground."
                />

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {BlogPosts.slice(0, 4).map((item, index) => (
                        <BlogItem
                            title={item.title}
                            description={item.description}
                            imageUrl={item.imageUrl}
                            key={index}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Blog;
