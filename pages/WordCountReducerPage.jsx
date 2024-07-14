import React from "react";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer"; 
import DetailItem from "../components/DetailItem"; 
import Ellipse from "../components/Ellipse";
import '../components/styles.css';


const EssayEditorPage = () => (
  <div className="flex flex-col min-h-screen bg-white">
    <Header />
    <main className="flex-grow relative">
      <div className="relative text-center pt-10 my-5">
        <h1 className="text-5xl font-extrabold text-db my-2">Word Count Reducer</h1>
        <h3 className="text-xl font-medium leading-relaxed text-db my-4">
           <span className="text-lb">Effortlessly </span> keep your essays <br />
          under the word limit
        </h3>
        <Ellipse style={{ top: '8%', right: '90%' }} />
        <Ellipse style={{ bottom: '81%', left: '18%' }} />
        <Ellipse style={{ top: '31%', left: '67%' }} />
        
        <button className="mx-auto rounded-xl flex items-center gap-4 px-10 py-1 text-md font-semibold border-2 border-sky-900 text-white bg-sky-900 hover:bg-sky-800 transition-colors">
          <span>Shorten Now</span>
          <svg width="20" height="16" viewBox="0 0 20 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
            <path d="M10 0L8.59 1.41L14.17 7H0V9H14.17L8.59 14.59L10 16L18 8L10 0Z" />
          </svg>
        </button>
      </div>
{/**
 * 
 
      <div className="relative bg-lb py-4 my-16 z-10">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="text-4xl font-extrabold text-db my-3 mb-5 pl-3">AI Powered <span class="text-lb">Perfection</span></h1>
          <section className="flex justify-center flex-wrap gap-8 px-4 mb-5">
            <DetailItem
              title="Writing Mechanics"
              description="Analyzes diction, sentence and paragraph length, writing complexity, and more"
              icon="/book.svg"
            />
            <DetailItem
              title="Personalized Advice"
              description="Extracts essay’s themes and suggests ECs to prioritize based on the specific college"
              icon="/people.svg"
            />
            <DetailItem
              title="Key Takeaways"
              description="Identifies the essay’s central message and what an admissions officer would remember"
              icon="/school.svg"
            />
          </section>
        </div>
      </div>

**/}

<div className="relative bg-lb py-4 my-16 z-10">
        <div className="mx-auto max-w-6xl text-center md:text-left">
          <h1 className="text-4xl font-extrabold text-db my-3 mb-5 pl-3">
            Clean <span class="text-lb">and </span> <span class="text-db">Concise</span>
          </h1>
          <section className="flex justify-center flex-wrap gap-10 px-4 mb-5">
            <div className="flex flex-col gap-6">
              <DetailItem
                title="Streamlined Writing"
                description="Remove unnecessary clutter to deliver a clearer, more effective message to admissions officers"
                icon="/pencil.svg"
              />
              <DetailItem
                title="Efficient Communication"
                description="Cut down words to achieve clear, concise, and powerful communication"
                icon="/scissors.svg"
              />
            </div>
            <div className="flex-1">
              <div className="bg-zinc-300 aspect-square min-h-[300px] rounded-3xl w-full lg:max-h-[480px] xs:max-h-[60px] flex items-center justify-center">
                {/* Content goes here */}
              </div>
            </div>
          </section>
        </div> 
      </div>



      <div className="flex gap-8 items-center flex-row max-w-5xl max-h-[300px] pt-10 mx-auto my-16 relative z-20">
        <div className="flex-1 pl-5">
          <h2 className="md:text-5xl text-3xl font-extrabold text-db mb-4">Not Just Essays, <br></br><span className="text-lb"> EC Descriptions </span> Too</h2>
          <p className="md:text-xl  text-lg font-medium leading-relaxed text-cyan-700 mb-6">
            Customize your extracurricular descriptions<br/> for every college with optimized writing 
          </p>
          <button className="px-5 rounded-xl flex items-center gap-4 py-1 text-md font-semibold border-2 border-sky-900 text-white bg-sky-900 hover:bg-sky-800 transition-colors">
            <span>Customize Now</span>
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

export default EssayEditorPage;
