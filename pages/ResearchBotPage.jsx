import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import FeatureSection from "../components/FeatureSection";
import DetailItem from "../components/DetailItem";
import Footer from "../components/Footer";
import Ellipse from "../components/Ellipse";
import '../components/styles.css';




const ResearchBotPage = () => (
  <div className="flex flex-col min-h-screen bg-white">
    <Header />
    <main className="flex-grow relative">

      <div className="relative text-center pt-10 my-5">
        <h1 className="text-5xl font-extrabold text-db my-2">Research Bot</h1>
        <h3 className="text-xl font-medium leading-relaxed text-db my-4">
          Get <span className="text-lb">in-depth insights</span> on every college<br />
          you love
        </h3>
        <Ellipse style={{ top: '12%', right: '90%' }} />
        <Ellipse style={{ bottom: '70%', left: '82%' }} />
        <button className="mx-auto rounded-xl flex items-center gap-4 px-10 py-1 text-md font-semibold border-2 border-sky-900 text-white bg-sky-900 hover:bg-sky-800 transition-colors">
          <span>How it Works</span>
          <svg width="20" height="16" viewBox="0 0 20 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
            <path d="M10 0L8.59 1.41L14.17 7H0V9H14.17L8.59 14.59L10 16L18 8L10 0Z" />
          </svg>
        </button>
      </div>

      <div className="relative bg-lb py-4 my-16 z-10">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="text-4xl font-extrabold text-db my-3 mb-5 pl-3">All the Details</h1>
          <section className="flex justify-center flex-wrap gap-8 px-4 mb-5">
            <DetailItem
              title="Academics"
              description="Explore majors, courses, unique research projects, notable professors, and more"
              icon="/book.svg"
            />
            <DetailItem
              title="Student Experience"
              description="Discover niche clubs, shared experiences, and all the small things that define college life"
              icon="/people.svg"
            />
            <DetailItem
              title="Everything Else"
              description="Learn the culture, history, and traditions that give each college its unique character"
              icon="/school.svg"
            />
          </section>
        </div>
      </div>

      <div className="flex gap-8 items-center flex-row max-w-5xl max-h-[300px] pt-10 mx-auto my-16 relative z-10">
        <div className="flex-1 pl-5">
          <h2 className="md:text-5xl text-3xl font font-extrabold text-db mb-4">Any Question,<br/><span className="text-lb">Instant </span>Answers</h2>
          <p className="md:text-xl  text-lg font-medium leading-relaxed text-cyan-700 mb-6">
            Forget about having to search, scroll,<br/> and scavenge for every detail 
          </p>
          <button className="px-5 rounded-xl flex items-center gap-4 py-1 text-md font-semibold border-2 border-sky-900 text-white bg-sky-900 hover:bg-sky-800 transition-colors">
            <span>Start Researching</span>
            <svg width="20" height="16" viewBox="0 0 20 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
              <path d="M10 0L8.59 1.41L14.17 7H0V9H14.17L8.59 14.59L10 16L18 8L10 0Z" />
            </svg>
          </button>
        </div>
        <div className="flex-1">
          <div className="aspect-square rounded-3xl bg-zinc-300 max-w-sm mx-auto" />
        </div>
      </div>

    </main>
    <Footer />
  </div>
);

export default ResearchBotPage;
