import React, { useState, useEffect } from "react";

const AnimatedText = ({ text }) => {
  const [visibleLetters, setVisibleLetters] = useState([]);

  useEffect(() => {
    text.split("").forEach((char, index) => {
      setTimeout(() => {
        setVisibleLetters((prev) => [...prev, char]);
      }, index * 150); // Adjust delay for smoother animation
    });
  }, [text]);

  return (
    <div className="text-4xl flex space-x-1 overflow-hidden">
      {text.split("").map((char, index) => (
        <span
          key={index}
          className={`inline-block transition-all duration-700 ease-in-out transform ${
            visibleLetters.includes(char)
              ? "opacity-100 translate-X-0"
              : "opacity-0 -translate-X-5"
          }`}
        >
          {char}
        </span>
      ))}
    </div>
  );
};

export default AnimatedText;
