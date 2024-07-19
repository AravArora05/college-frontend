"use client";
import React, { useState, useEffect, useRef } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import '../components/styles.css';

const NoLinkDropdownButton = ({ title = "Dropdown", data }) => {
  const flyoutContentData = [
    { name: "EC Description Feedback" },
    { name: "College Fit Finder" },
    { name: "Research Bot" },
  ];

  return (
    <FlyoutLink title={title} FlyoutContent={data || flyoutContentData} />
  );
};

const FlyoutLink = ({ title, FlyoutContent }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [contentWidth, setContentWidth] = useState(0);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setContentWidth(contentRef.current.offsetWidth);
    }
  }, [isOpen]);

  return (
    <div
      className="relative inline-block"
      onClick={() => setIsOpen(!isOpen)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="flex items-center gap-2 cursor-pointer bg-white px-3 py-2 rounded-lg border border-gray-200 shadow-sm hover:bg-gray-100">
        <span className="text-sky-900 font-semibold text-lg">
          {title}
        </span>
        {isOpen ? (
          <FaChevronUp style={{ color: '#6B7280', fontSize: '16px' }} />
        ) : (
          <FaChevronDown style={{ color: '#6B7280', fontSize: '16px' }} />
        )}
      </div>
      {isOpen && (
        <div
          className="absolute bg-gray-100 opacity-25 left-0 h-5"
          style={{ width: `${contentWidth}px` }}
        />
      )}
      {isOpen && (
        <div
          ref={contentRef}
          className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg w-auto whitespace-nowrap z-10"
        >
          <FlyoutContentComponent options={FlyoutContent} />
        </div>
      )}
    </div>
  );
};

const FlyoutContentComponent = ({ options }) => {
  return (
    <div className="py-2">
      {options.map(({ name }, index) => (
        <div className="hover:bg-gray-100 px-6 py-2" key={index}>
          <p className="block text-gray-900">{name}</p>
        </div>
      ))}
    </div>
  );
};

export default NoLinkDropdownButton;
