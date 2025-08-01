"use client";
import ReviewCard from "./ReviewCard";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Reviews } from "@/lib/data/review";
import Autoplay from "embla-carousel-autoplay";
import SectionHeading from "@/components/SectionHeading";
import Container from "@/components/container";

const Review = () => {
    return (
        <section className="py-16">
            <Container className=" ">
                <SectionHeading
                    title="Word on the Street"
                    subtitle="See what others are saying"
                />
                <Carousel
                    opts={{
                        loop: true,
                    }}
                    plugins={[
                        Autoplay({
                            playOnInit: true,
                            delay: 6000,
                            stopOnInteraction: false,
                        }),
                    ]}
                >
                    <CarouselContent>
                        {Reviews.map((review, index) => (
                            <CarouselItem
                                key={index}
                                className="basis-3/3 sm:basis-2/3 md:basis-1/3"
                            >
                                <ReviewCard
                                    review={review.review}
                                    name={review.name}
                                    position={review.position}
                                    imageUrl={review.imageUrl}
                                />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-2" />
                    <CarouselNext className="right-2" />
                </Carousel>
            </Container>
        </section>
    );
};

export default Review;
