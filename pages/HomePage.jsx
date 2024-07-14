import '../components/styles.css';
import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import FeatureSection from "../components/FeatureSection";
import TestimonialCard from "../components/TestimonialCard";
import Footer from "../components/Footer";
import Ellipse from "../components/Ellipse";

function HomePage() {
    const testimonials = [
        {
            name: "Rahul Rangaraaj",
            major: "Computer Science",
            testimonial: "This platform made my college application process so much easier!",
        },
        {
            name: "Vasili Fovos",
            major: "Biology",
            testimonial: "I got into my dream school thanks to the personalized guidance.",
        },
        {
            name: "James Martin",
            major: "Business",
            testimonial: "The AI writing tools helped me craft the perfect essays.",
        },
        {
            name: "Arav Arora",
            major: "Engineering",
            testimonial: "I discovered colleges that were a perfect fit for my interests.",
        },
    ];

    const items = new Array(4).fill(null);

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Header />
            <main className="flex-grow">
                <Hero />
                <Ellipse style={{ top: '5%', left: '85%' }} />

                <div className="relative bg-lb py-1 my-16">
                    <FeatureSection
                        title="Explore"
                        description="Discover your unique traits and find colleges that love what you love"
                        buttonText="Find Your Fit"
                        imagePosition="left" />
                </div>


                <div className="relative">
                    <FeatureSection
                        title="Write"
                        description="Take your application to the next level with tailor-made AI writing tools"
                        buttonText="Start Writing" />
                    <Ellipse style={{ top: '55%', right: '87%' }} />
                </div>

                <FeatureSection
                    title="Optimize"
                    description="Cater your content to each college at the click of a button"
                    buttonText="Perfect Now"
                    imagePosition="left" />

                <div className="bg-sky-blue py-8 my-16">
                    <div className="max-w-6xl mx-auto px-4 flex justify-between">
                        {items.map((_, index) => (
                            <div key={index} className="bg-zinc-300 h-12 w-48" />
                        ))}
                    </div>
                </div>


                <section className="max-w-6xl mx-auto px-4 mt-16 mb-0">
                    <h2 className="text-4xl font-extrabold text-center text-db mb-4">
                        What <span className="text-customBlue">Students</span> Are Saying
                    </h2>
                    <p className="text-xl font-medium text-center text-db mb-8">
                        Hear from thousands of successful applicants
                    </p>

                    <div className="flex gap-6 overflow-x-auto pb-4">
                        {testimonials.map((user, index) => (
                            <TestimonialCard
                                key={index}
                                name={user.name}
                                major={user.major}
                                testimonial={user.testimonial} />))}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default HomePage;
