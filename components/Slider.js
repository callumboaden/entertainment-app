import styles from "../styles/Slider.module.css";
import SliderCard from "./SliderCard";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Slider({ items, toggleBookmark }) {
  const [width, setWidth] = useState(0);
  const dragSlider = useRef();

  useEffect(() => {
    setWidth(
      dragSlider.current.scrollWidth - dragSlider.current.offsetWidth + 100
    );
  });

  console.log(width);

  return (
    <motion.div className={styles.slider} ref={dragSlider}>
      <motion.div
        ref={dragSlider}
        className={styles.container}
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
      >
        {items.map((item, i) => (
          <SliderCard
            key={i}
            item={item}
            toggleBookmark={toggleBookmark}
          ></SliderCard>
        ))}
      </motion.div>
    </motion.div>
  );
}
