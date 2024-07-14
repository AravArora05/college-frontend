import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="mt-16 max-w-4xl mx-auto px-4 flex flex-col items-start">
      <h1 className="text-5xl font-extrabold text-left">
        <span className="text-sky-900">College Counseling,</span>
        <br />
        <span className="text-sky-900">Made</span> <span className="text-cyan-500 italic">Easy</span>
      </h1>
      <p className="mt-4 text-2xl font-medium leading-relaxed text-cyan-700 text-left">
        Find your strengths, build your dream list,
        <br />
        and craft the perfect application
      </p>
      <Link href="https://www.linkedin.com/in/samarthtewari/" target="_blank" rel="noopener noreferrer">
        <button className="flex gap-3 items-center px-8 py-3 mt-4 text-lg font-semibold text-white bg-sky-900 rounded-xl">
          <span>Let's Go</span>
          <Image
            src="/images/arrow-right.svg"
            alt=""
            width={20}
            height={16}
            className="shrink-0 aspect-[1.28] fill-white fill-opacity-0"
          />
        </button>
      </Link>
    </section>
  );
};

export default Hero;
