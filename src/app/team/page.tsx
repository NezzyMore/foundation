import React from "react";
import PageHeader from "../components/Layout/PageHeader/PageHeader";
import GalleryItem from "../components/GalleryItem/GalleryItem";
import { TeamMembers } from "@/lib/data/team";

const TeamPage = () => {
    return (
        <div>
            <PageHeader
                title="Our team"
                subtitle="Meet the faces making this possible"
            />

            <div className="container mx-auto grid md:grid-cols-4 lg:grid-cols-4 gap-4">
                {TeamMembers.map((item, index) => (
                    <GalleryItem
                        imageUrl={item.imageUrl}
                        imageAlt={item.title + " Team member image"}
                        imageTitle={item.title}
                        imageDescription={item.description}
                        key={index}
                    />
                ))}
            </div>
        </div>
    );
};

export default TeamPage;
