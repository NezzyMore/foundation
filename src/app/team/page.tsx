import React from "react";
import PageHeader from "../components/Layout/PageHeader/PageHeader";
import GalleryItem from "../components/GalleryItem/GalleryItem";
import { TeamMembers } from "@/lib/data/team";
import Container from "@/components/container";

const TeamPage = () => {
    return (
        <div>
            <PageHeader
                title="Our team"
                subtitle="Meet the faces making this possible"
            />

            <Container className=" grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 py-14">
                {TeamMembers.map((item, index) => (
                    <GalleryItem
                        imageUrl={item.imageUrl}
                        imageAlt={item.title + " Team member image"}
                        imageTitle={item.title}
                        imageDescription={item.description}
                        key={index}
                    />
                ))}
            </Container>
        </div>
    );
};

export default TeamPage;
