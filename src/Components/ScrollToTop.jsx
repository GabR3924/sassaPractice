import React, { useState, useEffect } from "react";
import { BsChevronUp } from "react-icons/bs";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 100 ? setVisible(true) : setVisible(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className={`scrollToTop ${visible ? "visible" : ""}`}>
      <button onClick={scrollToTop}>
        <BsChevronUp />
      </button>
    </div>
  );
}
