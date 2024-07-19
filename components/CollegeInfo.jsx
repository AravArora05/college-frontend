import React from 'react';
import Link from 'next/link';

const CollegeArticle = ({ college, selected, setSelected, index }) => {
    const isExpanded = selected === index;

    const toggle = () => {
        if (isExpanded) {
            setSelected(null);
        } else {
            setSelected(index);
        }
    };

    const getValue = (value) => (value ? value.toString() : 'N/A');
    const getTuition = (tuitionValue) => {
        if (tuitionValue && tuitionValue !== "N/A") {
            if (Array.isArray(tuitionValue)) {
                let value = parseFloat(tuitionValue[0].value.replace('$', '').replace(',', ''));
                if (!isNaN(value)) {
                    return value.toString();
                }
            } else {
                let value = parseFloat(tuitionValue.replace('$', '').replace(',', ''));
                if (!isNaN(value)) {
                    return value.toString();
                }
            }
        } else {
            return "N/A";
        }
    };

    return (
        <div className="w-full flex flex-col items-center mb-4">
            <article className="flex flex-col items-center w-full max-w-3xl bg-sky-200 bg-opacity-30 rounded-3xl p-4">
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-12 w-full">
                    <div className="bg-zinc-300 h-32 w-32 flex-shrink-0 mt-1"></div>
                    <div className="flex flex-col justify-start font-medium w-full">
                        <h2 className="text-2xl sm:text-3xl font-semibold text-sky-900 mt-1 text-center sm:text-left">
                            {college["Website"] ? 
                                <Link target="_blank" href={college["Website"]}>
                                    {college["institution.displayName"]}
                                </Link>
                             : 
                                college["institution.displayName"]
                            }
                        </h2>
                        <p className="text-lg sm:text-xl text-sky-900 text-opacity-50 text-center sm:text-left">
                            {`${college["institution.institutionalControl"].charAt(0).toUpperCase() + college["institution.institutionalControl"].slice(1)} University`}
                        </p>
                        <p className="text-lg sm:text-xl text-sky-900 text-opacity-50 flex justify-between w-full">
                            <span>{college["institution.city"] && college["institution.state"] ? `${college["institution.city"]}, ${college["institution.state"]}` : ""}</span>
                            <span>{getValue(college["searchData.enrollment.rawValue"])} Students</span>
                        </p>
                        {!isExpanded && (
                            <button
                                className="mt-4 text-base leading-8 text-sky-900 text-opacity-30 self-center w-full sm:w-auto"
                                onClick={toggle}
                            >
                                Click to Learn More
                            </button>
                        )}
                    </div>
                    <div className="flex flex-col items-center font-semibold text-sky-900 sm:mt-0">
                        <div className="bg-gray-300 w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden flex items-center justify-center p-2">
                            <div style={{ transform: 'rotate(-0.25turn)' }}>
                            </div>
                        </div>
                        <button className="mt-2 py-2 px-4 bg-transparent text-sky-900 border border-sky-900 rounded-full text-sm whitespace-nowrap">
                            Add to List
                        </button>
                    </div>
                </div>
                {isExpanded && (
                    <div className="w-full mt-4 flex flex-col text-db">
                        <h3 className="text-2xl font-semibold mb-4 text-center">Important Information</h3>
                        <div className="flex flex-col">
                            <div className="flex justify-between items-center mb-1">
                                <span className="text-lg font-semibold">GPA Range:</span>
                                <span className="text-base">{getValue(college["searchData.hsGpaAvg.rawValue"])}</span>
                            </div>
                            <div className="flex justify-between items-center mb-1">
                                <span className="text-lg font-semibold">SAT Range:</span>
                                <span className="text-base">{getValue(college["searchData.satAvg.displayValue"])}</span>
                            </div>
                            <div className="flex justify-between items-center mb-1">
                                <span className="text-lg font-semibold">ACT Range:</span>
                                <span className="text-base">{getValue(college["searchData.actAvg.displayValue"])}</span>
                            </div>
                            <div className="flex justify-between items-center mb-1">
                                <span className="text-lg font-semibold">Tuition:</span>
                                <span className="text-base">{getTuition(college["searchData.tuition.displayValue"])}</span>
                            </div>
                            <div className="flex justify-between items-center mb-1">
                                <span className="text-lg font-semibold">Application Deadline:</span>
                                <span className="text-base">{getValue(college["Application Deadline"])}</span>
                            </div>
                            <div className="flex justify-between items-center mb-1">
                                <span className="text-lg font-semibold">Acceptance Rate:</span>
                                <span className="text-base">{getValue(college["Acceptance Rate"])}</span>
                            </div>
                        </div>
                        <button
                            className="mt-4 text-base leading-8 text-sky-900 text-opacity-30 self-center w-full sm:w-auto"
                            onClick={toggle}
                        >
                            Click to Close
                        </button>
                    </div>
                )}
            </article>
        </div>
    );
};

export default CollegeArticle;
