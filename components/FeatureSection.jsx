import React from "react";
import Image from "next/image";

const FeatureSection = ({
  title,
  description,
  buttonText,
  imagePosition = "right",
}) => {
  return (
    <div
      className={`flex gap-8 items-center ${
        imagePosition === "left" ? "flex-row-reverse" : "flex-row"
      } max-w-5xl mx-auto my-16`}
    >
      <div className="flex-1">
        <h2 className="text-5xl font-extrabold text-db mb-4">{title}</h2>
        <p className="text-xl font-medium leading-relaxed text-cyan-700 mb-6">
          {description}
        </p>
        <button className="flex items-center gap-3 px-6 py-2 text-lg font-semibold rounded-xl border-2 border-sky-900 text-db hover:bg-sky-900 hover:text-white transition-colors">
          <span>{buttonText}</span>
          <Image
            src="/arrow-right.svg"
            alt="Right Arrow Image"
            width={20}
            height={16}
            className="shrink-0 fill-current"
          />
        </button>
      </div>
      <div className="flex-1">
        <div className="aspect-square rounded-3xl bg-zinc-300 max-w-sm mx-auto" />
        
      </div>
    </div>
  );
};

export default FeatureSection;
