import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./ImageCarousel.module.css";

interface Props {
  imagesArray?: Array<string>;
  altText?: string;
}

export const ImageCarousel: React.FC<Props> = ({ imagesArray, altText }) => {
  const [current, setCurrent] = useState<number>(0);

  const length = imagesArray!.length;

  /* If the data isnt an array */
  if (!Array.isArray(imagesArray) || length <= 0) return null;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const previousSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className={styles.slider}>
      <FontAwesomeIcon
        icon={faCircleArrowLeft}
        className={styles.leftArrow}
        onClick={previousSlide}
      />
      {imagesArray?.map((slide, index) => (
        <div
          key={index}
          className={index === current ? styles.slideActive : styles.slide}
        >
          {index === current && <img src={slide} alt={altText} />}
        </div>
      ))}
      <FontAwesomeIcon
        icon={faCircleArrowRight}
        className={styles.rightArrow}
        onClick={nextSlide}
      />
    </div>
  );
};
