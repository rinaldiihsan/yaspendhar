import React, { useRef, useEffect } from 'react';
import '../../styles/ScrollProgram.css';

const ScrollProgram: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let isDown = false;
    let startX: number;
    let scrollLeft: number;

    const onMouseDown = (e: MouseEvent) => {
      isDown = true;
      scrollContainer.classList.add('active');
      startX = e.pageX - scrollContainer.offsetLeft;
      scrollLeft = scrollContainer.scrollLeft;
      e.preventDefault();
    };

    const onMouseLeave = () => {
      isDown = false;
      scrollContainer.classList.remove('active');
    };

    const onMouseUp = () => {
      isDown = false;
      scrollContainer.classList.remove('active');
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - scrollContainer.offsetLeft;
      const walk = (x - startX) * 1;
      scrollContainer.scrollLeft = scrollLeft - walk;
    };

    const onTouchStart = (e: TouchEvent) => {
      isDown = true;
      startX = e.touches[0].pageX - scrollContainer.offsetLeft;
      scrollLeft = scrollContainer.scrollLeft;
    };

    const onTouchEnd = () => {
      isDown = false;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDown) return;
      const x = e.touches[0].pageX - scrollContainer.offsetLeft;
      const walk = (x - startX) * 1;
      scrollContainer.scrollLeft = scrollLeft - walk;
    };

    const preventDefault = (e: MouseEvent) => {
      e.preventDefault();
    };

    scrollContainer.addEventListener('mousedown', onMouseDown);
    scrollContainer.addEventListener('mouseleave', onMouseLeave);
    scrollContainer.addEventListener('mouseup', onMouseUp);
    scrollContainer.addEventListener('mousemove', onMouseMove);

    scrollContainer.addEventListener('touchstart', onTouchStart);
    scrollContainer.addEventListener('touchend', onTouchEnd);
    scrollContainer.addEventListener('touchmove', onTouchMove);

    const images = scrollContainer.querySelectorAll('img');
    images.forEach((img) => {
      img.addEventListener('mousedown', preventDefault);
    });

    return () => {
      scrollContainer.removeEventListener('mousedown', onMouseDown);
      scrollContainer.removeEventListener('mouseleave', onMouseLeave);
      scrollContainer.removeEventListener('mouseup', onMouseUp);
      scrollContainer.removeEventListener('mousemove', onMouseMove);

      scrollContainer.removeEventListener('touchstart', onTouchStart);
      scrollContainer.removeEventListener('touchend', onTouchEnd);
      scrollContainer.removeEventListener('touchmove', onTouchMove);

      images.forEach((img) => {
        img.removeEventListener('mousedown', preventDefault);
      });
    };
  }, []);

  return (
    <section className="flex flex-col px-4 lg:px-32 py-16 gap-y-16">
      <div className="flex flex-col md:flex-row justify-between items-center text-center">
        <span className="hidden md:block md:w-72 h-1.5 bg-yellowPrimary"></span>
        <h1 className="uppercase text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold">program unggulan yaspendhar</h1>
        <span className="hidden md:block md:w-72 h-1.5 bg-yellowPrimary"></span>
      </div>
      <div className="w-[100%] overflow-x-scroll horizontal-scroll" ref={scrollContainerRef}>
        <div className="flex w-max gap-x-4 snap-x">
          {Array(8)
            .fill(0)
            .map((_, idx) => (
              <figure key={idx} className="item snap-center">
                <img src="/dummy-program.png" alt="dummy" className="w-[100%] h-[100%] object-cover object-center" />
                <figcaption className="uppercase font-medium">pengembangan keterampilan teknologi</figcaption>
              </figure>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollProgram;
