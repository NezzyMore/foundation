import Container from "@/components/container";
import SectionHeading from "@/components/SectionHeading";
import React from "react";

const VideoSection = () => {
    return (
        // The main container for the video section with responsive padding and background
        <div className="bg-gray-100 py-16">
            <Container>
                <SectionHeading
                    title="Our Vision in Action"
                    subtitle="Watch this video to learn more about our mission and impact on the community."
                    className=" mb-12"
                />

                <div className="mt-12 w-full ">
                    <div
                        className="relative"
                        style={{ paddingBottom: "56.25%", height: 0 }}
                    >
                        <iframe
                            src="https://www.youtube.com/embed/Se2LJxZBeVU"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className="absolute top-0 left-0 w-full h-full rounded-2xl"
                        ></iframe>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default VideoSection;
