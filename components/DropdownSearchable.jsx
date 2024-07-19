"use client";
import React, { useState, useEffect, useRef, useMemo } from 'react';
import Image from 'next/image';
import Fuse from 'fuse.js';

const DropdownSearchable = ({ options, placeholder, value, setValue, showError }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredOptions, setFilteredOptions] = useState(options);
    const dropdownRef = useRef(null);
    const searchInputRef = useRef(null);

    // Configure Fuse instance for fuzzy searching
    const fuse = useMemo(() => new Fuse(options, {
        includeScore: true,
        threshold: 0.4,
    }), [options]);

    useEffect(() => {
        if (!placeholder && options.length > 0 && !value) {
            setValue(options[0]);
        }
    }, [options, placeholder, value, setValue]);

    useEffect(() => {
        if (searchTerm === '') {
            setFilteredOptions(options);
        } else {
            const prefixMatches = [];
            const fuzzyMatches = [];

            options.forEach(option => {
                if (option.toLowerCase().startsWith(searchTerm.toLowerCase())) {
                    prefixMatches.push(option);
                }
            });

            const fuseResults = fuse.search(searchTerm);
            fuseResults.forEach(result => {
                if (!prefixMatches.includes(result.item)) {
                    fuzzyMatches.push(result.item);
                }
            });

            setFilteredOptions([...prefixMatches, ...fuzzyMatches]);
        }
    }, [searchTerm, options, fuse]);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            setTimeout(() => {
                searchInputRef.current?.focus();
            }, 0);
        }
    };

    const selectOption = (option) => {
        setValue(option);
        setIsOpen(false);
        setSearchTerm('');
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
                setSearchTerm('');
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <div 
                className={`flex flex-row justify-center items-center gap-2 px-4 py-2 text-sky-900 text-lg whitespace-nowrap bg-white rounded-lg border border-solid ${
                    showError 
                      ? 'border-red-400 ring-2 ring-red-400' 
                      : 'border-black border-opacity-10'
                  } cursor-pointer`} 
                onClick={toggleDropdown}
            >
                <div>{value || placeholder || options[0]}</div>
                <Image 
                    src="/dropdown_down_icon.svg" 
                    width={18} 
                    height={18} 
                    alt="" 
                    className={`shrink-0 self-start aspect-square transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                />
            </div>
            {isOpen && (
                <div className="flex flex-col justify-center items-center absolute top-full left-0 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                    <input
                        ref={searchInputRef}
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-4 py-2 border-b border-gray-200 focus:outline-none"
                    />
                    <div className="max-h-60 overflow-y-auto w-full">
                        {filteredOptions.map((option) => (
                            <div 
                                key={option} 
                                className="w-full px-4 py-2 hover:bg-sky-100 cursor-pointer text-center text-lg text-sky-900"
                                onClick={() => selectOption(option)}
                            >
                                {option}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default DropdownSearchable;
