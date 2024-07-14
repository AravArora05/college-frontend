"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React, { useState } from "react";
import '../components/styles.css';

const FAQPage = () => {
  let faqs = [
    {
      question: "What is AdmitAI?",
      answer: "AdmitAI is an AI-driven platform that provides personalized guidance and insights to help high school students navigate the college admissions process."
    },
    {
      question: "How does AdmitAI work?",
      answer: "AdmitAI uses advanced algorithms to analyze your academic and extracurricular profile, offering tailored advice and recommendations to improve your chances of getting into your dream school."
    },
    {
      question: "Is AdmitAI free to use?",
      answer: "AdmitAI offers both free and premium subscription plans. Our free plan includes basic features, while the premium plan provides access to personalized coaching and in-depth analysis."
    },
    {
      question: "How can I sign up for AdmitAI?",
      answer: "To sign up for AdmitAI, click on the 'Sign Up' button at the top right corner of the homepage and follow the instructions to create your account."
    },
    {
      question: "What services does AdmitAI offer?",
      answer: "AdmitAI offers a range of services including college matching, essay feedback, interview preparation, and application tracking, all powered by AI."
    },
    {
      question: "How can I get personalized essay feedback?",
      answer: "To get personalized essay feedback, simply upload your essay on the AdmitAI platform, and our AI-powered tool will provide detailed suggestions and improvements."
    },
   
  ];

  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      setSelected(null);
      return;
    }
    setSelected(i);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow relative">
        <div className="text-db justify-center items-center max-w-5xl mx-auto">
          <h1 className="font-bold text-4xl text-center mx-auto mb-6">FAQS Page</h1>
          <h3 className="text-center mb-6">Here is a compilation of common questions asked by AdmitAI Users!</h3>
          {faqs.map((item, i) => (
            <div key={i} className="cursor-pointer item mb-3 w-2/3 mx-auto">
              <div onClick={() => toggle(i)} className="title flex justify-between items-center bg-gray-100 hover:bg-blue-100 p-4 rounded shadow">
                <h2 className="text-xl font-semibold">{item.question}</h2>
                <span className="text-xl">{selected === i ? "-" : "+"}</span>
              </div>
              <div className={selected === i ? "block bg-lb p-4 rounded-b shadow-inner" : "hidden"}>
                <h3 className="text-md">{item.answer}</h3>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQPage;
