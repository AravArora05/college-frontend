import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer"; 
import DetailItem from "../components/DetailItem"; 
import Ellipse from "../components/Ellipse";
import '../components/styles.css';

const FindYourSpikePage = () => (
  <div className="flex flex-col min-h-screen bg-white">
    <Header />
    <main className="flex-grow relative">
      <div className="relative text-center pt-10 my-5">
        <h1 className="text-5xl font-extrabold text-db my-2">Find Your Spike</h1>
        <h3 className="text-xl font-medium leading-relaxed text-db my-4">
          Discover your<span className="text-lb"> unique</span><br /> combination of traits
        </h3>
        <Ellipse style={{ top: '8%', right: '90%' }} />
        <Ellipse style={{ bottom: '81%', left: '18%' }} />
        <Ellipse style={{ top: '31%', left: '67%' }} />
        
        <button className="mx-auto rounded-xl flex items-center gap-4 px-10 py-1 text-md font-semibold border-2 border-sky-900 text-white bg-sky-900 hover:bg-sky-800 transition-colors">
          <span>Uncover Now</span>
          <svg width="20" height="16" viewBox="0 0 20 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
            <path d="M10 0L8.59 1.41L14.17 7H0V9H14.17L8.59 14.59L10 16L18 8L10 0Z" />
          </svg>
        </button>
      </div>

      


      <div className="relative bg-lb py-4 my-16 z-10">
        <div className="mx-auto max-w-6xl text-center md:text-left">
          <h1 className="text-4xl font-extrabold text-db my-3 mb-5 pl-3">
           Discover Your <span className="text-lb">Edge </span>
          </h1>
          <section className="flex flex-col gap-8 px-4 mb-5">
          <div className="flex items-start gap-6">
              <img src="/award.svg" alt="Efficient Communication" className="w-16 h-16" />
              <div>
                <h3 className="text-2xl font-bold text-db">Core Competencies</h3>
                <p className="text-lg text-db">
                Identify and highlight the key skills and powerful strengths that make you unique
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <img src="/stocks.svg" alt="Focused Messaging" className="w-16 h-16" />
              <div>
                <h3 className="text-2xl font-bold text-db">Weakness Recognition</h3>
                <p className="text-lg text-db">
                Uncover areas where you can improve and develop actionable plans to turn them into strengths
                </p>
              </div>
            </div>
          </section>
        </div> 
      </div>

      <div className="flex gap-8 items-center flex-row max-w-5xl max-h-[300px] pt-10 mx-auto my-16 relative z-20">
        <div className="flex-1 pl-5 md:pl-0">
          <h2 className="md:text-5xl text-3xl font-extrabold text-db mb-4">
            Don't Have a <span className="text-lb">Complete </span>Application Strategy
          </h2>
          <p className="md:text-xl text-lg font-medium leading-relaxed text-cyan-700 mb-6">
            See which colleges are a perfect fit based <br /> on your spike and academic profile
          </p>
          <button className="px-5 rounded-xl flex items-center gap-4 py-1 text-md font-semibold border-2 border-sky-900 text-white bg-sky-900 hover:bg-sky-800 transition-colors">
            <span>Explore Colleges</span>
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

export default FindYourSpikePage;
