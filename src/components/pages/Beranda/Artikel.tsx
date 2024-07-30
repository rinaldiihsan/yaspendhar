import React from 'react';

const Artikel = () => {
  return (
    <>
      <div className="flex flex-col px-4 lg:px-32 py-16 gap-y-14">
        <h1 className="uppercase text-xl md:text-2xl xl:text-3xl font-bold">Artikel Terbaru</h1>
        <div className="flex flex-col md:flex-row justify-between items-center text-center">
          <img src="/dummy-artikel.png" alt="Dummy Artikel" />
          <div className="flex flex-col gap-y-6 text-left">
            <div className="flex flex-col gap-y-3">
              <h3>Medan, 01 Desember 2023</h3>
              <h2>SISWA SMA HARAPAN 1 MENDAPATKAN JUARA 1 </h2>
              <p>Lorem ipsum dolor sit amet consectetur. Facilisi nisl ultrices egestas nunc facilisis. Egestas magna in morbi nibh sit lobortis ac amet. Eros bibendum id neque montes malesuada. Pulvinar aenean nulla aliquam.........</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Artikel;
