"use client";
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DropdownSearchable from "@/components/DropdownSearchable";
import CollegeArticle from "@/components/CollegeInfo";
import '../components/styles.css';

const SearchCollegesPage = () => {
    const LIST_LENGTH = 20;
    const [searchMode, setSearchMode] = useState("university");
    const [universityName, setUniversityName] = useState("");
    const [selectedAttribute, setSelectedAttribute] = useState("");
    const [selectedAttributeOption, setSelectedAttributeOption] = useState("");
    const [collegeOptions, setCollegeOptions] = useState([]);
    const [selectedAttributeOptionIndex, setSelectedAttributeOptionIndex] = useState(-1); 
    const [selected, setSelected] = useState(null);
    const [allSchools, setAllSchools] = useState(null);
    const [displayedSchools, setDisplayedSchools] = useState(null);
    

    useEffect(() => {
        fetch('http://localhost:8000/colleges')
          .then(res => {

            return res.json();
          })
          .then(data => {
            setAllSchools(data);
            console.log(data);
            const updatedData = data.map(item => item["institution.displayName"]);
            setCollegeOptions(updatedData);
            setDisplayedSchools(data);
          })
          .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
          });
      }, []);

    const attributeSearchOptions = {
        "HS GPA": ["2.0 - 3.0", "3.0 - 3.3", "3.3 - 3.6", "> 3.6"],
        "ACT": ["< 20", "20 - 25", "25 - 30", "> 30"],
        "SAT": ["< 1100", "1100 - 1300", "1300 - 1500", ">1500"],
        "Acceptance Rate": ["< 10%", "10% - 25%", "> 25%"],
        "Tuition": ["< $20,000", "$20,000 - $40,000", "> $40,000"],
        "Location": ["East Coast", "West Coast", "Midwest", "South"]
    };

    const handleAttributeChange = (value) => {
        setSelectedAttribute(value);
        setSelectedAttributeOption(""); 
        setSelectedAttributeOptionIndex(-1); 
        setSearchMode("attribute");
    };

    const handleUniversityChange = (value) => {
        setUniversityName(value);
        setSearchMode("university");
    };

    const handleResetSearch = () => {
        setSearchMode("university");
        setSelectedAttribute("");
        setSelectedAttributeOption("");
        setSelectedAttributeOptionIndex(-1);
        setUniversityName("");
    };



    const handleOptionSelection = (option, index) => {
        setSelectedAttributeOption(option);
        setSelectedAttributeOptionIndex(index);
    };

   const search = () => {
    let list = [];
    if (searchMode === "university") {
        console.log("Searching for university:", universityName);
        if (!universityName) {
            alert("Must select an option");
        } else {
            const index = allSchools.findIndex((college) => college["institution.displayName"] === universityName);
            if (index !== -1) {
                console.log(index);
                list.push(allSchools[index]);

                if (index < 10) {
                    for (let j = 1; j < 20; j++) {
                        if (allSchools[j + index]) {
                            list.push(allSchools[j + index]);
                        }
                    }
                } else if (index > (allSchools.length - 10)) {
                    for (let j = 1; j < 20; j++) {
                        if (allSchools[index - j]) {
                            list.push(allSchools[index - j]);
                        }
                    }
                } else {
                    for (let j = 1; j < 10; j++) {
                        if (allSchools[j + index]) {
                            list.push(allSchools[j + index]);
                        }
                        if (allSchools[index - j]) {
                            list.push(allSchools[index - j]);
                        }
                    }
                }
            }
            setDisplayedSchools(list);
        }
    } else {
        console.log("Searching by attribute:", selectedAttribute, "with value:", selectedAttributeOption);
        if (selectedAttributeOptionIndex !== -1) {
            if (selectedAttribute === "ACT") {
                searchACT(selectedAttributeOptionIndex);   
            } else if (selectedAttribute === "SAT") {
                searchSAT(selectedAttributeOptionIndex);
            } else if (selectedAttribute === "Acceptance Rate") {
                searchAcceptanceRate(selectedAttributeOptionIndex);
            } else if (selectedAttribute === "Location") {
                searchRegion(selectedAttributeOptionIndex);
            } else if (selectedAttribute === "HS GPA") {
                searchHSGPA(selectedAttributeOptionIndex);
            } else if (selectedAttribute === "Tuition") {
                searchTuition(selectedAttributeOptionIndex);
            }
            console.log("hi");
        } else {
            alert("Must select a clicked option");
        }
    }
    console.log("Selected Attribute Option Index:", selectedAttributeOptionIndex);
    
};


    const searchTuition = (index) => {
        let list = [];
        let minTuition, maxTuition;
    
        if (index === 0) {
            minTuition = 0;
            maxTuition = 20000;
        } else if (index === 1) {
            minTuition = 20000;
            maxTuition = 40000;
        } else {
            minTuition = 40000;
            maxTuition = Infinity; 
        }

        for (let i = 0; i < allSchools.length; i++) {
            let school = allSchools[i];
            let tuitionValue = school["searchData.tuition.displayValue"];
            console.log(tuitionValue);
            if (tuitionValue || tuitionValue !== "N/A") {
                if (Array.isArray(tuitionValue)) {
                    let value = parseFloat(tuitionValue[0].value.replace('$', '').replace(',', ''));
                    if (!isNaN(value) && value >= minTuition && value <= maxTuition) {
                        list.push(school);
                    }
                } else {
                    let value = parseFloat(tuitionValue.replace('$', '').replace(',', ''));
                    if (!isNaN(value) && value >= minTuition && value <= maxTuition) {
                        list.push(school);
                    }
                }
            }
            if (list.length === LIST_LENGTH) {
                break;
            }
        }
        console.log(list);
        setDisplayedSchools(list);
    
    };
    


    const searchAcceptanceRate = (index) => {
        let list = [];
        let minRate, maxRate;
        if (index === 0) {
            minRate = 0;
            maxRate = 10;
        } else if (index === 1) {
            minRate = 10;
            maxRate = 25;  
        } else {
            minRate = 25; 
            maxRate = 100;
        }
        for (let i = 0; i < allSchools.length; i++) {
            let school = allSchools[i];
            let rateValue = school["searchData.acceptanceRate.displayValue"];
            if (rateValue && rateValue !== "N/A") {
                rateValue = parseFloat(rateValue.replace('%', ''));
                if (!isNaN(rateValue) && rateValue >= minRate && rateValue <= maxRate) {
                    list.push(school);
                }
            }
            if (list.length === LIST_LENGTH) {
                break;
            }
        }
        setDisplayedSchools(list);
    };
    
    const searchACT = (index) => {
        let list = [];
        let minACT, maxACT;
    
        if (index === 0) {
            minACT = 1;
            maxACT = 20;
        } else if (index === 1) {
            minACT = 20;
            maxACT = 25;
        } else if (index === 2) {
            minACT = 25;
            maxACT = 30;
        } else {
            minACT = 30;
            maxACT = 36;
        }
        for (let i = 0; i < allSchools.length; i++) {
            let school = allSchools[i];
            let avgValue = school["searchData.actAvg.displayValue"];
            
            if (avgValue && avgValue !== "N/A" && avgValue.includes("-")) {
                avgValue = Number(avgValue.split("-")[0].trim());
            }
    
            if (!isNaN(avgValue) && avgValue >= minACT && avgValue <= maxACT) {
                list.push(school);
            }
    
            if (list.length === LIST_LENGTH) {
                break;
            }
        }
        console.log("Schools matching ACT range:", list);
        setDisplayedSchools(list);
    };
    

    const searchHSGPA = (index) => {
        let list = [];
        let minHSGPA, maxHSGPA;
        if (index === 0) {
            minHSGPA = 2.0;
            maxHSGPA = 3.0;
        } else if (index === 1) {
            minHSGPA = 3.0;
            maxHSGPA = 3.3;
        } else if (index == 2) {
            minHSGPA = 3.3;
            maxHSGPA = 3.6;
        } else {
            minHSGPA = 3.6;
            maxHSGPA = 4.0;
        }
        for (let i = 0; i < allSchools.length; i++) {
            let school = allSchools[i];
            let avgValue = school["searchData.hsGpaAvg.rawValue"];
            
            if (avgValue && avgValue != "N/A" && avgValue >= minHSGPA && avgValue < maxHSGPA) {
                list.push(school);
            }
    
            if (list.length === LIST_LENGTH) {
                break;
            }
        }
        console.log("Schools matching High School GPA range:", list);
        setDisplayedSchools(list);
    };
    


    const searchSAT = (index) => {
        let list = [];
        let minSAT, maxSAT;
    
        if (index === 0) {
            minSAT = 0;
            maxSAT = 1100;
        } else if (index === 1) {
            minSAT = 1100;
            maxSAT = 1300;
        } else if (index === 2) {
            minSAT = 1300;
            maxSAT = 1500;
        } else {
            minSAT = 1500;
            maxSAT = Infinity; 
        } 
        for (let i = 0; i < allSchools.length; i++) {
            let school = allSchools[i];
            let avgValue = school["searchData.satAvg.displayValue"];
    
            if (avgValue && avgValue !== "N/A" && avgValue.includes("-")) {
                avgValue = Number(avgValue.split("-")[0].trim());
            }
            if (!isNaN(avgValue) && avgValue > minSAT && avgValue <= maxSAT) {
                list.push(school);
            }
            if (list.length === LIST_LENGTH) {
                break;
            }
        }
        console.log("Schools matching SAT range:", list);
        setDisplayedSchools(list);
    };
    


    const searchRegion = (index) => {
        let list = [];
        let regions = [];
    
        if (index === 0) {
            regions = ['CT', 'DE', 'DC', 'FL', 'GA', 'ME', 'MD', 'MA', 'NH', 'NJ', 'NY', 'NC', 'RI', 'SC', 'VT', 'VA', 'WV'];
        } else if (index === 1) {
            regions = ['AK', 'CA', 'HI', 'OR', 'WA'];
        } else if (index === 2) {
            regions = ['IL', 'IN', 'IA', 'KS', 'MI', 'MN', 'MO', 'NE', 'ND', 'OH', 'SD', 'WI'];
        } else {
            regions = ['AL', 'AR', 'KY', 'LA', 'MS', 'OK', 'TN', 'TX'];
        }
        for (let i = 0; i < allSchools.length; i++) {
            let school = allSchools[i];
            let state = allSchools[i]["institution.state"];
            if (state && state !== "N/A" && regions.includes(state)) {
                list.push(school);
            }
            if (list.length == LIST_LENGTH){
                break;
            }
        };
        setDisplayedSchools(list);
    
    };

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Header />
            <main className="flex-grow relative">

            <div className="relative text-center pt-10 my-5">
        <h1 className="text-5xl font-extrabold text-db my-2">College Fit Finder</h1>
        <h3 className="text-xl font-medium leading-relaxed text-db my-4">
          Discover the colleges that<span className="text-lb"> perfectly</span><br /> align with your <span class="text-lb">unique</span> profile
        </h3>
       
        
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
                            Discover Your <span className="text-lb">Dream School</span>
                        </h1>
                        <section className="flex flex-col items-center gap-8 px-4 mb-5 bg-white rounded-md overflow-scroll h-[500px] max-w-5xl mx-auto">
                            <div className="w-full flex flex-col md:flex-row gap-5 items-start">
                                <div className={`relative flex-grow`}>
                                    {searchMode === "attribute" ? (
                                        <div className="w-full bg-white border border-gray-300 rounded-md p-4">
                                            <h3 className="text-lg font-bold mb-3 w-full text-black">Select {selectedAttribute} Options:</h3>
                                            <div className="flex flex-wrap gap-6">
                                                {attributeSearchOptions[selectedAttribute]?.map((option, index) => (
                                                    <div key={index} className="flex items-center mb-2">
                                                        <label className="inline-flex items-center">
                                                            <input 
                                                                type="radio" 
                                                                name="attributeOption" 
                                                                value={option} 
                                                                className="form-radio h-4 w-4 text-blue-600" 
                                                                checked={selectedAttributeOption === option}
                                                                onChange={() => handleOptionSelection(option, index)}
                                                            />
                                                            <span className="ml-2 text-gray-700">{option}</span>
                                                        </label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ) : (
                                        <DropdownSearchable 
                                            options={collegeOptions}
                                            placeholder="Search by University Name"
                                            value={universityName}
                                            setValue={handleUniversityChange}
                                            showError={false}
                                        />
                                    )}
                                </div>
                                <div className="flex items-center justify-center mx-2 h-full">
                                    {searchMode === "attribute" ? (
                                        <img src="/arrow-right.svg" alt="arrow" className="w-6 h-6 text-gray-400" />
                                    ) : (
                                        <span className="text-black">or</span>
                                    )}
                                </div>
                                <div className="flex-shrink-0">
                                    <DropdownSearchable 
                                        options={Object.keys(attributeSearchOptions)} 
                                        placeholder="Search by Attribute"
                                        value={selectedAttribute}
                                        setValue={handleAttributeChange}
                                        showError={false}
                                    />
                                    {searchMode === "attribute" && (
                                        <button 
                                            className="mt-2 bg-db hover:bg-blue-900 text-white text-xl font-bold py-2 px-4 rounded-lg"
                                            onClick={handleResetSearch}
                                        >
                                            Back to University Search
                                        </button>
                                    )}
                                </div>
                            </div>
                            <button className="bg-db hover:bg-blue-900 text-white text-xl font-bold py-2 px-6 mt-5 rounded-lg" onClick={search}>
                                SEARCH
                            </button>
                            {
                                displayedSchools && displayedSchools.map((school, index) => (
                                     
                                        <CollegeArticle college={displayedSchools[index]} selected={selected} setSelected={setSelected} index={index}></CollegeArticle>
                                    
                                ))
                            }
                           
                           
                        </section>
                    </div>
                </div>

                <div className="flex gap-8 items-center flex-row max-w-5xl max-h-[300px] pt-10 mx-auto my-16 relative z-20">
        <div className="flex-1 pl-5 lg:pl-0">
          <h2 className="md:text-5xl text-3xl font-extrabold text-db mb-4">
            Find Your <span className="text-lb">Perfect </span>College Match
          </h2>
          <p className="md:text-xl text-lg font-medium leading-relaxed text-cyan-700 mb-6">
          Tailor your search to find institutions that <span class="text-lb">best</span> match your <span class="text-lb">strengths and aspirations</span>.
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
};

export default SearchCollegesPage;
