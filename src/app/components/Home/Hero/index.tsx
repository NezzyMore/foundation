const Hero = () => {
    return (
        <section
            className="relative min-h-screen flex items-center bg-cover bg-fixed bg-center"
            style={{ backgroundImage: "url(/images/banner/home-hero-2.jpg)" }}
        >
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative container mx-auto px-4 py-20">
                <div className="max-w-2xl">
                    <h1 className="font-bold text-4xl sm:text-5xl text-white leading-tight mb-6">
                        Continuing Teresia Waihuini's Legacy
                    </h1>
                    <p className="text-white/90 text-base sm:text-lg leading-7 sm:leading-8">
                        Nurturing communities by weaving together the threads of
                        knowledge, sustainability, and visionary leadership, we
                        cultivate environments where individuals thrive and
                        empower one another. Through education, we spark minds;
                        through environmental care, we protect the earth; and
                        through leadership development, we inspire
                        transformative action for a brighter, more unified
                        future.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
