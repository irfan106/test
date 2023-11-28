import { useState, useEffect, useRef } from 'react';

// Custom hook to manage box visibility
export default function useBoxVisible(initialIsVisible) {
    // State for box visibility
    const [isBoxVisible, setIsBoxVisible] = useState(initialIsVisible);
    
    // Refs for the box and its parent element
    const ref = useRef(null);
    const parentRef = useRef(null);

    // Function to handle clicks outside the box
    const handleClickOutside = (event) => {
        // Check if click is outside the box
        if (ref.current && !ref.current.contains(event.target)) {
            setIsBoxVisible(false);
        } else if (parentRef.current && parentRef.current.contains(event.target)) {
            // Toggle box visibility when clicking on the parent element
            setIsBoxVisible(!isBoxVisible);
        }
    };

    // Effect to listen for click events and call handleClickOutside
    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []); // Empty dependency array ensures this effect runs only once

    // Return necessary values and functions for managing box visibility
    return { ref, parentRef, isBoxVisible, setIsBoxVisible };
}
