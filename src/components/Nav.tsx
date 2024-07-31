import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'usehooks-ts';
import './styles/Navbar.css';

const navMotion = {
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.15,
    },
  },
  hidden: {
    opacity: 0,
  },
};

const itemMotion = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: 100 },
};

const Nav = () => {
  const [toggled, setToggled] = useState(false);
  const matches = useMediaQuery('(min-width: 1128px)');
  const [isClient, setIsClient] = useState(false);
  const { pathname } = window.location;

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  const isActive = (path: string) => (pathname === path ? 'nav-link active' : 'nav-link');

  return (
    <nav className="flex justify-between items-center px-4 lg:px-32 py-5 bg-greenPrimary sticky top-0 shadow-sm z-50">
      <a href="/" className="flex gap-x-2 items-center">
        <img src="/logo.png" alt="Logo Yaspendhar" className="w-[50px] md:w-[65px]" />
        <h1 className="text-sm md:text-base font-semibold text-white">Yayasan Pendidikan Harapan</h1>
      </a>

      {matches && (
        <div className="flex gap-x-5 justify-between text-white">
          <a href="/" className={`${isActive('/')} nav-link`}>
            Beranda
          </a>
          <a href="/tentang-kami" className={`${isActive('/tentang-kami')} nav-link`}>
            Tentang Kami
          </a>
          <a href="/galeri" className={`${isActive('/galeri')} nav-link`}>
            Galeri
          </a>
        </div>
      )}

      {!matches && (
        <div className="space-y-1.5 cursor-pointer z-50" onClick={() => setToggled((prevToggle) => !prevToggle)}>
          <motion.span animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0 }} className="block h-0.5 w-8 bg-white" />
          <motion.span animate={{ width: toggled ? 0 : 32 }} className="block h-0.5 w-8 bg-white" />
          <motion.span animate={{ rotateZ: toggled ? -45 : 0, y: toggled ? -8 : 0 }} className="block h-0.5 w-8 bg-white" />
        </div>
      )}

      {toggled && !matches && (
        <div className="flex fixed bg-greenPrimary bottom-0 left-0 w-full h-screen justify-center items-center">
          <motion.div variants={navMotion} animate="visible" initial="hidden" className="flex flex-col gap-y-4 text-white">
            <motion.a variants={itemMotion} href="/" className={`${isActive('/')} nav-link`}>
              Beranda
            </motion.a>
            <motion.a variants={itemMotion} href="/tentang-kami" className={`${isActive('/tentang-kami')} nav-link`}>
              Tentang Kami
            </motion.a>
            <motion.a variants={itemMotion} href="/galeri" className={`${isActive('/galeri')} nav-link`}>
              Galeri
            </motion.a>
          </motion.div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
