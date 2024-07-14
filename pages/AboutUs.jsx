"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import '../components/styles.css';
import React from "react";

const AboutUs = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow relative bg-white p-5 mx-8">
        <section className="rounded-xl flex flex-wrap md:flex-nowrap gap-8 items-center flex-row max-w-5xl pt-10 mx-auto my-8 bg-lb p-3">
          <div className="flex-1 pl-5">
            <h2 className="md:text-5xl text-3xl font-extrabold text-db mb-4">About Us</h2>
            <p className="md:text-xl text-lg font-medium leading-relaxed text-cyan-700 mb-6">
              AdmitAI revolutionizes college admissions with AI-driven insights, personalized guidance, and seamless application support.
            </p>
          </div>
          <div className="flex-1 min-w-[300px]">
            <div className="aspect-square rounded-3xl bg-zinc-300 max-w-sm mx-auto relative">
              <Image
                className="rounded-3xl"
                src="/college-application-essay.jpg"
                layout="fill"
                objectFit="cover"
                alt="College Application Essay"
              />
            </div>
          </div>
        </section>

        <section className="rounded-xl flex flex-row-reverse gap-8 items-center max-w-5xl flex-wrap md:flex-nowrap pt-10 mx-auto my-8 bg-gray-50 text-black p-3">
          <div className="flex-1 pl-5 max-w-2xl">
            <h2 className="md:text-5xl text-3xl font-extrabold text-db mb-4">Our Mission</h2>
            <p className="md:text-2xl text-lg font-medium leading-loose text-black-200 mb-6">
              <span className="bg-blue-300 p-1 px-2 rounded-md font-extrabold">Empowering Millions</span> of High School Students With the Tools to Secure Admission to Their <span className="bg-blue-300 p-1 px-2 rounded-md font-extrabold">Dream Schools</span>
            </p>
          </div>
          <div className="flex-1 min-w-[300px]">
            <div className="aspect-[5/4] rounded-3xl bg-zinc-300 max-w-sm mx-auto relative">
              <Image
                className="rounded-3xl"
                src="/happy-guy.jpg"
                layout="fill"
                objectFit="cover"
                alt="Happy Student"
              />
            </div>
          </div>
        </section>

        <section className="rounded-xl flex flex-wrap md:flex-nowrap gap-8 items-center flex-row max-w-5xl pt-10 mx-auto my-8 bg-lb p-3">
          <div className="flex-1 pl-5">
            <h2 className="md:text-4xl text-2xl font-extrabold text-db mb-4">Our Story</h2>
            <p className="md:text-lg text-md leading-loose text-cyan-700 mb-3">
              AdmitAI was founded by Samarth Tewari, a Georgia Tech student and Bay Area native passionate about leveraging technology to improve lives. Growing up in Silicon Valley, Samarth experienced the transformative power of technology firsthand.
            </p>
            <p className="md:text-lg text-md leading-loose text-cyan-700 mb-3">
              Inspired by his own college admissions journey, he created AdmitAI to simplify the process and provide high school students with the necessary tools and guidance.
            </p>
            <p className="md:text-lg text-md leading-loose text-cyan-700 mb-6">
              His dedication to this mission led to the development of a platform combining AI-driven insights with personalized guidance and seamless application support.
            </p>
          </div>
          <div className="flex-1 min-w-[350px]">
            <div className="aspect-[3/4] rounded-3xl bg-zinc-300 max-w-sm mx-auto relative">
              <Image
                className="rounded-3xl"
                src="/samarth-pic.jpg"
                layout="fill"
                objectFit="cover"
                alt="Samarth Tewari"
              />
            </div>
          </div>
        </section>

        <section className="relative max-w-5xl mx-auto bg-lb py-4 my-16">
          <div className="mx-auto max-w-6xl text-center">
            <h1 className="text-4xl font-extrabold text-db my-3 mb-5 pl-3">AdmitAI: By the Numbers</h1>
            <div className="flex justify-center flex-wrap gap-8 px-4 mb-5">
              <div className="flex flex-col items-center p-2 min-w-[200px] bg-white rounded-lg shadow-md w-64">
                <img src="/smile.svg" alt="User Satisfaction Icon" className="h-20 mb-2" />
                <h3 className="text-xl pt-3 font-bold text-sky-900 mb-2">95% User Satisfaction Rate</h3>
              </div>
              <div className="flex flex-col items-center p-2 min-w-[200px] bg-white rounded-lg shadow-md w-64">
                <img src="/people.svg" alt="Users Icon" className="h-20 mb-2" />
                <h3 className="text-xl pt-3 font-bold text-sky-900 mb-2">Over 1,000 Users</h3>
              </div>
              <div className="flex flex-col items-center p-2 min-w-[200px] bg-white rounded-lg shadow-md w-64">
                <img src="/school.svg" alt="Counselors Icon" className="h-20 mb-2" />
                <h3 className="text-xl pt-3 font-bold text-sky-900 mb-2">Recommended by 20+ College Counselors</h3>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
