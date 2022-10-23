import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

import Image from "next/future/image";
import styles from "../styles/SliderCard.module.css";
import BookmarkIconEmpty from "../public/assets/icon-bookmark-empty.svg";
import BookmarkIconFull from "../public/assets/icon-bookmark-full.svg";
import PlayIcon from "../public/assets/icon-play.svg";
import MovieCategoryIcon from "../public/assets/icon-category-movie.svg";
import TvSeriesCategoryIcon from "../public/assets/icon-category-tv.svg";

export default function SliderCard({ item, toggleBookmark }) {
  const handleClick = () => {
    toggleBookmark(item);
  };

  const categoryIcon =
    item.category === "Movie" ? (
      <MovieCategoryIcon />
    ) : item.category === "TV Series" ? (
      <TvSeriesCategoryIcon />
    ) : (
      ""
    );

  const bookmarkIcon = !item.isBookmarked ? (
    <BookmarkIconEmpty onClick={handleClick} />
  ) : (
    <BookmarkIconFull onClick={handleClick} />
  );

  return (
    <motion.div className={styles.sliderCard}>
      <motion.div className={styles.image}>
        <div className={styles.overlay}>
          <div className={styles.overlayIcon}>
            <PlayIcon /> <span>Play</span>
          </div>
        </div>
        <Image
          src={"/" + item.thumbnail.regular.medium}
          alt={item.title}
          width={500}
          height={300}
        />
        <div class={styles.icon}>{bookmarkIcon}</div>
      </motion.div>
      <div className={styles.details}>
        <span>{item.year}</span>
        <span>
          {categoryIcon} {item.category}
        </span>
        <span>{item.rating}</span>
      </div>
      <h3 className={styles.title}>{item.title}</h3>
    </motion.div>
  );
}
