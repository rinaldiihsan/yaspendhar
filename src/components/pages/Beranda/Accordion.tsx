import React, { useState } from 'react';
import { motion } from 'framer-motion';

const data = [
  {
    title: 'Kapan pendaftaran PPDB dibuka?',
    content: 'This is the content of the accordion 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
  },
  {
    title: 'Ada jalur pendaftaran apa saja?',
    content: 'Anda dapat memilih dari berbagai jalur pendaftaran yang tersedia. Kami akan memberikan informasi lebih lanjut tentang jalur pendaftaran saat proses PPDB dimulai.',
  },
  {
    title: 'Kapan pendaftaran PPDB dibuka?',
    content: 'This is the content of the accordion 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
  },
  {
    title: 'Kapan pendaftaran PPDB dibuka?',
    content: 'This is the content of the accordion 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
  },
  {
    title: 'Kapan pendaftaran PPDB dibuka?',
    content: 'This is the content of the accordion 5. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
  },
  {
    title: 'Kapan pendaftaran PPDB dibuka?',
    content: 'This is the content of the accordion 6. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
  },
];

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index: any) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="flex flex-col px-4 lg:px-32 py-20 gap-y-16">
      <h1 className="uppercase text-xl md:text-2xl xl:text-3xl font-bold text-center">PERTANYAAN YANG SERING DIAJUKAN</h1>
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-12">
        <div className="flex flex-col gap-y-3 flex-1">
          {data.slice(0, 3).map((item, index) => (
            <div key={index} className="border border-greenPrimary rounded-lg">
              <div className="flex justify-between items-center p-4 bg-greenPrimary cursor-pointer rounded-t-lg" onClick={() => toggleAccordion(index)}>
                <h2 className="font-semibold md:text-lg xl:text-xl text-white">{item.title}</h2>
                <motion.div initial={{ rotate: 180 }} animate={{ rotate: openIndex === index ? 0 : 180 }} transition={{ duration: 0.2 }}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#fff">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                  </svg>
                </motion.div>
              </div>
              <motion.div initial={false} animate={{ height: openIndex === index ? 'auto' : 0 }} className="overflow-hidden">
                <div className="p-4 bg-greenPrimary rounded-b-lg">
                  <p className="text-sm md:text-base text-white text-justify">{item.content}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-y-3 flex-1">
          {data.slice(3).map((item, index) => (
            <div key={index + 3} className="border border-greenPrimary rounded-lg">
              <div className="flex justify-between items-center p-4 bg-greenPrimary cursor-pointer rounded-t-lg" onClick={() => toggleAccordion(index + 3)}>
                <h2 className="font-semibold md:text-lg xl:text-xl text-white">{item.title}</h2>
                <motion.div initial={{ rotate: 180 }} animate={{ rotate: openIndex === index ? 0 : 180 }} transition={{ duration: 0.2 }}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#fff">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                  </svg>
                </motion.div>
              </div>
              <motion.div initial={false} animate={{ height: openIndex === index + 3 ? 'auto' : 0 }} className="overflow-hidden">
                <div className="p-4 bg-greenPrimary rounded-b-lg">
                  <p className="text-sm md:text-base text-white text-justify">{item.content}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
