import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';

const BackendURL = import.meta.env.PUBLIC_BACKEND_URL;

const fetchCarousels = async (setCarousels: React.Dispatch<React.SetStateAction<any[]>>) => {
  try {
    const response = await axios.get(`${BackendURL}/carousel/get`);
    const carouselsData = response.data.data;
    if (Array.isArray(carouselsData)) {
      const sortedCarousels = carouselsData.filter((item: any) => !isNaN(new Date(item.createdAt).getTime())).sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

      const latestCarousels = sortedCarousels.slice(0, 3);
      setCarousels(latestCarousels);
    } else {
      console.error('Expected an array but received:', carouselsData);
    }
  } catch (error) {
    console.error('Error Fetching Carousel:', error);
  }
};

const getImageUrl = (item: any) => {
  return `${BackendURL}/${item.carousel_image.replace(/\\/g, '/')}`;
};

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
  const [carousels, setCarousels] = useState<any[]>([]);

  useEffect(() => {
    fetchCarousels(setCarousels);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(([prevIndex]) => [(prevIndex + 1) % carousels.length, 1]);
    }, 3000);
    return () => clearInterval(interval);
  }, [carousels]);

  return (
    <section className="relative w-full overflow-hidden h-[40vh] lg:h-[668px] xl:h-[778px]">
      <AnimatePresence initial={false} custom={direction}>
        {carousels.map(
          (carousel, i) =>
            i === index && (
              <motion.div
                key={carousel.id}
                className="absolute w-full h-full"
                initial="enter"
                animate="center"
                exit="exit"
                variants={variants}
                custom={direction}
                transition={{ x: { type: 'spring', stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
              >
                <img src={getImageUrl(carousel)} alt={`Slide ${i}`} className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 flex justify-center items-center flex-col space-y-2">
                  <h1 className="text-white text-center text-lg md:text-xl lg:text-2xl xl:text-4xl font-bold uppercase" dangerouslySetInnerHTML={{ __html: carousel.carousel_caption }} />
                  <p className="text-white text-center text-sm md:text-lg lg:text-xl font-medium uppercase" dangerouslySetInnerHTML={{ __html: carousel.carousel_desc }} />
                </div>
              </motion.div>
            )
        )}
      </AnimatePresence>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 hidden md:flex space-x-2 z-10">
        {carousels.map((_, i) => (
          <button key={i} onClick={() => setIndex([i, i > index ? 1 : -1])} className={`w-2 h-2 rounded-full ${i === index ? 'bg-white' : 'bg-gray-400'}`} aria-label="buttonCarousel" />
        ))}
      </div>
    </section>
  );
};

export default Carousel;
