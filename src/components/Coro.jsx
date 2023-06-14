import { useState, useRef, useEffect } from 'react';

// Data
import data from '../assets/data.json';

const Carousel = () => {
  // Original data here --------------------
  const TopFeatursAi = [
    {
      img:"src/assets/yt_logo.png",
      name:"Video AI",
      link:"#"
    },
    {
      img:"src/assets/insta.jpg",
      name:"Insta Reels AI",
      link:"#"
    },
    {
      img:"src/assets/ai_img.jpg",
      name:"Chat AI",
      link:"#"
    },
    {
      img:"src/assets/in_tech.png",
      name:"Travel AI",
      link:"#"
    },
    {
      img:"src/assets/img2.png",
      name:"Editor AI",
      link:"#"
    },
    {
      img:"src/assets/Entertainment.jpg",
      name:"Entertainment AI",
      link:"#"
    },
    {
      img:"src/assets/img2.png",
      name:"Editor AI",
      link:"#"
    },
    {
      img:"src/assets/Entertainment.jpg",
      name:"Entertainment AI",
      link:"#"
    }
  ]
  // Original data end ------------------------

  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === 'prev') {
      return currentIndex <= 0;
    }

    if (direction === 'next' && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  return (
    <div className="carousel my-12 mx-auto px-2">
      <h2 className="text-4xl leading-8 font-semibold mb-5 text-slate-700 text-center">
      Top Features
      </h2>
      <div className="relative overflow-hidden">
        <div className="flex justify-between absolute top left w-full h-full">
          <button
            onClick={movePrev}
            className="text-gray-700 w-20 h-full text-center opacity-50 hover:opacity-50 hover:scale-150 disabled:opacity-25 z-10 p-5 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled('prev')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="sr-only">Prev</span>
          </button>
          <button
            onClick={moveNext}
            className=" text-gray-700 w-20 h-full text-center opacity-50 hover:opacity-50 hover:scale-150 disabled:opacity-25 z-10 p-5 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled('next')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="sr-only">Next</span>
          </button>
        </div>
        <div
          ref={carousel}
          className="carousel-container relative flex gap-2 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0 mx-16"
        >
          {TopFeatursAi.map((item, index) => {
            return (
                // From here 
              <div
                key={index}
                className="carousel-item text-center relative w-64 px-5 snap-start"
              >
                <a href={ item.link } className='min-w-[200px] w-[15vw]  hover:shadow-2xl duration-[300ms] flex flex-col items-center my-20 rounded rounded-2xl p-2' key={ index }>
                <img className='min-w-[150px] w-[150px] h-[150px] rounded-full my-5 hover:scale-110 duration-200 durration-[200ms] ' src={ item.img } />
                <div
                className='text-xl text-gray-800 font-bold'>
                    <h1 className='w-full py-5 px-1 '>{ item.name }</h1>
                </div>
            </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
