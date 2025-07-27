import React from "react";
import Image from "next/image";
import { BlogPosts } from "@/lib/data/blog"; // Assuming BlogPosts is in this path
import PageHeader from "@/app/components/Layout/PageHeader/PageHeader";
import { slugify } from "@/lib/utils";

// Helper function to slugify a string

// generateStaticParams replaces getStaticPaths for dynamic segments in App Router
export async function generateStaticParams() {
    const slugs = BlogPosts.map((post) => ({
        blogSlug: slugify(post.title),
    }));

    return slugs;
}

// BlogPostPage is now an async Server Component to fetch data directly
interface BlogPostPageProps {
    params: {
        blogSlug: string;
    };
}

const BlogPostPage = async ({ params }: BlogPostPageProps) => {
    const { blogSlug } = params;

    // Fetch the appropriate blog post based on the slug
    const post = BlogPosts.find((p) => slugify(p.title) === blogSlug);

    if (!post) {
        // In App Router, you can render a not found page or throw an error
        // For a simple case, we'll render a message. For a true 404, you'd use notFound() from next/navigation
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <p className="text-xl text-gray-700">Blog post not found.</p>
            </div>
        );
    }

    return (
        <>
            {/* PageHeader for the blog post title */}
            <PageHeader title={post.title} subtitle="Insights from TWF" />

            <section className="container mx-auto px-4 py-8 md:py-12 max-w-3xl">
                <div className="bg-white shadow-lg rounded-xl overflow-hidden">
                    {/* Blog Post Image */}
                    <div className="relative w-full h-64 sm:h-80 md:h-96">
                        <Image
                            src={post.imageUrl}
                            alt={post.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 50vw"
                        />
                    </div>

                    {/* Blog Post Content */}
                    <div className="p-6 md:p-8">
                        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            {post.title}
                        </h1>
                        <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                            {post.description}
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogPostPage;
