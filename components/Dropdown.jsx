"use client"
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const Dropdown = ({ options, placeholder, value, setValue }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        if (!placeholder && options.length > 0 && !value) {
            setValue(options[0]);
        }
    }, [options, placeholder, value, setValue]);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
        
    };

    const selectOption = (option) => {
        setValue(option);
        setIsOpen(false);
       
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
                console.log('Clicked outside, dropdown closed');
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative" ref={dropdownRef} style={{ zIndex: 1000 }}>
            <div 
                className="flex gap-2 px-4 py-2 text-sky-900 whitespace-nowrap bg-white rounded-lg border border-solid border-black border-opacity-10 cursor-pointer"
                onClick={toggleDropdown}
                style={{ zIndex: 1000 }} 
            >
                <div>{value || placeholder || options[0]}</div>
                <Image 
                    src="/dropdown_down_icon.svg" 
                    width={18} 
                    height={18} 
                    alt="Dropdown Icon" 
                    className={`shrink-0 self-start aspect-square transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                />
            </div>
            {isOpen && (
                <div 
                    className="absolute top-full left-0 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
                    style={{ zIndex: 1000, backgroundColor: 'white' }} 
                >
                    {options.map((option) => (
                        <div 
                            key={option} 
                            className="px-4 py-2 hover:bg-sky-100 cursor-pointer"
                            onClick={() => selectOption(option)}
                            style={{ pointerEvents: 'auto' }}
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dropdown;
