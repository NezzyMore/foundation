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

const Review = () => {
    return (
        <section>
            <div className="container mx-auto">
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
                            delay: 3000,
                            stopOnInteraction: false,
                        }),
                    ]}
                >
                    <CarouselContent>
                        {Reviews.map((review, index) => (
                            <CarouselItem key={index} className="basis-1/3">
                                <ReviewCard
                                    review={review.review}
                                    name={review.name}
                                    position={review.position}
                                    imageUrl={review.imageUrl}
                                />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </section>
    );
};

export default Review;
