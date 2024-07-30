import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  {
    src: '/hero1.png',
    captionHeading: 'Yayasan Pendidikan Harapan',
    captionParagraph: 'IMAN, ILMU DAN AMAL',
  },
  {
    src: '/hero1.png',
    captionHeading: 'Yayasan Pendidikan Harapan',
    captionParagraph: 'Yayasan Pendidikan Harapan adalah yayasan yang bergerak di bidang pendidikan',
  },
  {
    src: '/hero1.png',
    captionHeading: 'Yayasan Pendidikan Harapan',
    captionParagraph: 'Yayasan Pendidikan Harapan adalah yayasan yang bergerak di bidang pendidikan',
  },
];

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

const Carousel = () => {
  const [[index, direction], setIndex] = useState([0, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(([prevIndex]) => [(prevIndex + 1) % images.length, 1]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full overflow-hidden h-[40vh] lg:h-[668px] xl:h-[778px]">
      <AnimatePresence initial={false} custom={direction}>
        {images.map(
          (image, i) =>
            i === index && (
              <motion.div
                key={i}
                className="absolute w-full h-full"
                initial="enter"
                animate="center"
                exit="exit"
                variants={variants}
                custom={direction}
                transition={{ x: { type: 'spring', stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
              >
                <img src={image.src} alt={`Slide ${i}`} className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex justify-center items-center flex-col space-y-2">
                  <h1 className="text-white text-center text-lg md:text-xl lg:text-2xl xl:text-4xl font-bold uppercase" dangerouslySetInnerHTML={{ __html: image.captionHeading }} />
                  <p className="text-white text-center text-sm md:text-lg lg:text-xl font-medium" dangerouslySetInnerHTML={{ __html: image.captionParagraph }} />
                </div>
              </motion.div>
            )
        )}
      </AnimatePresence>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 hidden md:flex space-x-2 z-10">
        {images.map((_, i) => (
          <button key={i} onClick={() => setIndex([i, i > index ? 1 : -1])} className={`w-2 h-2 rounded-full ${i === index ? 'bg-white' : 'bg-gray-400'}`} />
        ))}
      </div>
    </section>
  );
};

export default Carousel;
