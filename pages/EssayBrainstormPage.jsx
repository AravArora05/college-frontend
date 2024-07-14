import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer"; 
import DetailItem from "../components/DetailItem"; 
import Ellipse from "../components/Ellipse";

const EssayBrainstormPage = () => (
  <div className="flex flex-col min-h-screen bg-white">
    <Header />
    <main className="flex-grow relative">
      {/* Hero Section */}
      <div className="relative text-center pt-10 my-5">
        <h1 className="text-5xl font-extrabold text-db my-2">Essay BrAInstorm</h1>
        <h3 className="text-xl font-medium leading-relaxed text-db my-4">
          Eliminate <span className="text-lb">writer's block</span> with <br />
          Personalized essay guidance
        </h3>
        <Ellipse style={{ top: '8%', right: '90%' }} />
        <Ellipse style={{ bottom: '81%', left: '18%' }} />
        <Ellipse style={{ top: '31%', left: '67%' }} />
        <button className="mx-auto rounded-xl flex items-center gap-4 px-10 py-1 text-md font-semibold border-2 border-sky-900 text-white bg-sky-900 hover:bg-sky-800 transition-colors">
          <span>Meet the Editor</span>
          <svg width="20" height="16" viewBox="0 0 20 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
            <path d="M10 0L8.59 1.41L14.17 7H0V9H14.17L8.59 14.59L10 16L18 8L10 0Z" />
          </svg>
        </button>
      </div>

     
      <div className="relative bg-lb p-8 my-16 z-10">
        <div className="mx-auto max-w-6xl text-center md:text-left">
          <h1 className="text-4xl font-extrabold text-db my-3 mb-5 pl-3">
            Build a <span className="text-lb">Flawless</span> Outline
          </h1>
          <div className="mb-5 bg-zinc-300 aspect-[9/4] max-h-[500px] rounded-3xl"></div>
        </div>
        
      </div>

     
      <div className="flex gap-12 items-center flex-wrap md:flex-nowrap max-w-5xl pt-10 mx-auto my-16 relative z-20">
        <div className="flex-1 pl-5">
          <h2 className="md:text-4xl text-3xl font-extrabold text-db mb-4">
            Create an Optimized Outline in <span className="text-lb">Seconds</span>
          </h2>
          <p className="md:text-xl text-lg font-medium leading-relaxed text-cyan-700 mb-6">
            Transform your writing process with instant, <br /> AI-powered feedback and recommendations.
          </p>
          <button className="px-5 rounded-xl flex items-center gap-4 py-1 text-md font-semibold border-2 border-sky-900 text-white bg-sky-900 hover:bg-sky-800 transition-colors">
            <span>Start Editing</span>
            <svg width="20" height="16" viewBox="0 0 20 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
              <path d="M10 0L8.59 1.41L14.17 7H0V9H14.17L8.59 14.59L10 16L18 8L10 0Z" />
            </svg>
          </button>
        </div>
        <div className="flex-1 p-4 min-w-[280px]">
          <div className="aspect-video rounded-3xl bg-zinc-300 mx-auto" />
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default EssayBrainstormPage;
