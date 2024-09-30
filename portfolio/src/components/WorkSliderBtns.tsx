"use client";
import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

interface Properties {
  containerStyles: string;
  btnStyles: string;
}

function WorkSliderBtns({ containerStyles, btnStyles }: Properties) {
  const swiper = useSwiper();
  return (
    <div className={containerStyles}>
      <button className={btnStyles} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold />
      </button>
      <button className={btnStyles} onClick={() => swiper.slideNext()}>
        <PiCaretRightBold />
      </button>
    </div>
  );
}

export default WorkSliderBtns;