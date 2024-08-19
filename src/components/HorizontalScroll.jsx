// src/components/HorizontalScroll.js

import React, { useState, useRef, useEffect } from 'react';
import './HorizontalScroll.css';

const HorizontalScroll = () => {
  const [items, setItems] = useState(Array.from({ length: 10 }, (_, i) => i + 1));
  const containerRef = useRef(null);

  const addItems = () => {
    setItems((prevItems) => [
      ...prevItems,
      ...Array.from({ length: 10 }, (_, i) => prevItems.length + i + 1),
    ]);
  };

  useEffect(() => {
    const container = containerRef.current;
    const handleScroll = () => {
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
        addItems();
      }
    };
    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="scroll-container" ref={containerRef}>
      <div className="scroll-content">
        {items.map((item) => (
          <div key={item} className="item">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScroll;
