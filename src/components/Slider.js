import React, { useEffect, useState } from "react";
import { data } from "../data/data";

const Slider = () => {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const slide = setInterval(() => {
      setIndex((currIndex) => {
        let next = currIndex + 1;
        if (next > people.length - 1) {
          next = 0;
        }
        return next;
      });
    }, 3000);
    return () => {
      clearInterval(slide);
    };
  }, [index, people]);
  const nextSlide = () => {
    setIndex((currIndex) => {
      let next = currIndex + 1;
      if (next > people.length - 1) {
        next = 0;
      }
      return next;
    });
  };
  const prevSlide = () => {
    setIndex((currIndex) => {
      let prev = currIndex - 1;
      if (prev < 0) {
        prev = people.length - 1;
      }
      return prev;
    });
  };
  return (
    <>
      {people.map((person, personIndex) => {
        const { id, name, jutsu, quote, img } = person;
        let slideVar = "next-slide";
        if (personIndex === index) {
          slideVar = "current-slide";
        }
        if (
          personIndex === index - 1 ||
          (index === 0 && personIndex == person.length - 1)
        ) {
          slideVar = "last-slide";
        }
        return (
          <article className={`slideItem ${slideVar}`} key={id}>
            <img src={img} alt={name} />
            <h2>{name}</h2>
            <h4>{jutsu}</h4>
            <span>{quote}</span>
          </article>
        );
      })}
      <button className="prevBtn" onClick={prevSlide}>
        ....Prev
      </button>
      <button className="nextBtn" onClick={nextSlide}>
        Next....
      </button>
    </>
  );
};

export default Slider;
