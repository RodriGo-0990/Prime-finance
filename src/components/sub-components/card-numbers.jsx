import React, { useEffect, useState, useRef } from 'react';
import ScrollReveal from 'scrollreveal';
import '../../css/cardNumbers.css';
function CardNumbers({ number, text, ms }) {
    const [num, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.5,
            }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (isVisible) {
            const interval = setInterval(() => {
                if (num < number) {
                    setCount(prevNum => prevNum + 1);
                } else {
                    clearInterval(interval);
                }
            }, ms);

            return () => clearInterval(interval); 
        }
    }, [isVisible, number, num, ms]);

    useEffect(() => {
        ScrollReveal().reveal('.card-number', {
            duration: 1500,
            distance: '50px'
        });
    }, []);

    return (
        <div className='card-number' ref={cardRef}>
            <div className='numbers'><p>{num} +</p></div>
            <div className='text-card'><p>{text}</p></div>
        </div>
    );
}

export default CardNumbers;
