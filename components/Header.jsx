import React from "react";
import NavItem from "./navItem";
import Link from "next/link";
import DropdownButton from "./DroopdownButton";
import Dropdown from "./Dropdown";

const Header = () => {

    const exploreOptions = [
        { name: "Find Your Spike", link: "/find-your-spike" },
        { name: "College Fit Finder", link: "/college-fit-finder" },
        { name: "Research Bot", link: "/research-bot" }
      ];
      
      const writeOptions = [
        { name: "Essay BrAInstorm", link: "/essay-brainstorm" },
        { name: "AI Essay Editor", link: "/essay-editor" }
      ];
      
      const optimizeOptions = [
        { name: "EC Description Feedback", link: "/ec-description-feedback" },
        { name: "Word Count Reduction", link: "/word-count" }
      ];

      
return (
    <header className="flex gap-2 justify-between items-center px-5 pt-5 pb-3 w-full max-w-[1180px] mx-auto max-md:flex-wrap max-md:max-w-full">
        <div className="text-3xl font-bold text-black">Logo</div>
        <nav className="flex sm:gap-5 gap-2 justify-between items-center text-base font-semibold text-sky-900 max-md:flex-wrap">
            
            <DropdownButton title="Explore" data={exploreOptions}/>
           <DropdownButton title="Write" data={writeOptions}/>
           <DropdownButton title="Optimize" data={optimizeOptions}/>
            <div className="px-6 py-2 text-xl text-white bg-sky-900 rounded-3xl max-md:px-5">
                <Link href="/about">Log in</Link>
            </div>
        </nav>
    </header>
)};

export default Header;
