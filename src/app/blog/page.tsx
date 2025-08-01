import React from "react";
import BlogItem from "../components/Home/Blog/BlogItem";
import PageHeader from "../components/Layout/PageHeader/PageHeader";
import { BlogPosts } from "@/lib/data/blog";

const BlogPage = () => {
    return (
        <section>
            <PageHeader title="Blog" subtitle="Latest news and updates" />
            <div className="py-14">
                <div className="container mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {BlogPosts.map((item, index) => (
                        <BlogItem
                            title={item.title}
                            description={item.description}
                            imageUrl={item.imageUrl}
                            key={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogPage;
