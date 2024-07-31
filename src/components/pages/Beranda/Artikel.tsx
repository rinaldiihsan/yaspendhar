import React from 'react';

const articles = [
  {
    image: '/dummy-artikel.png',
    date: 'Medan, 01 Desember 2023',
    title: 'SISWA SMA HARAPAN 1 MENDAPATKAN JUARA 1',
    description:
      'Lorem ipsum dolor sit amet consectetur. Facilisi nisl ultrices egestas nunc facilisis. Egestas magna in morbi nibh sit lobortis ac amet. Eros bibendum id neque montes malesuada. Pulvinar aenean nulla aliquam Lorem ipsum dolor sit amet consectetur. Facilisi nisl ultrices egestas nunc facilisis. Egestas magna in morbi nibh sit lobortis ac amet. Eros bibendum id neque montes malesuada. Pulvinar aenean nulla aliquam',
    link: '/',
  },
  {
    image: '/dummy-artikel.png',
    date: 'Medan, 01 Desember 2023',
    title: 'SISWA SMA HARAPAN 1 MENDAPATKAN JUARA 1',
    description:
      'Lorem ipsum dolor sit amet consectetur. Facilisi nisl ultrices egestas nunc facilisis. Egestas magna in morbi nibh sit lobortis ac amet. Eros bibendum id neque montes malesuada. Pulvinar aenean nulla aliquam Lorem ipsum dolor sit amet consectetur. Facilisi nisl ultrices egestas nunc facilisis. Egestas magna in morbi nibh sit lobortis ac amet. Eros bibendum id neque montes malesuada. Pulvinar aenean nulla aliquam',
    link: '/',
  },
];

const truncateDescription = (description: string, maxSentences: number) => {
  const sentences = description.split('. ');
  if (sentences.length <= maxSentences) {
    return description;
  }
  return sentences.slice(0, maxSentences).join('. ') + '...';
};

const Artikel = () => {
  return (
    <div className="flex flex-col px-4 lg:px-32 py-16 gap-y-14">
      <h1 className="uppercase text-xl md:text-2xl xl:text-3xl font-bold">Artikel Terbaru</h1>
      {articles.map((article, index) => (
        <div key={index} className="flex flex-col xl:flex-row justify-between items-center text-center xl:gap-x-11 gap-y-8 xl:gap-y-0">
          <img src={article.image} alt="Dummy Artikel" className="w-[100%] xl:w-[50rem]" />
          <div className="flex flex-col gap-y-4 text-left">
            <div className="flex flex-col gap-y-2 xl:max-w-[50em]">
              <h3 className="font-medium">{article.date}</h3>
              <h2 className="font-bold text-xl xl:text-3xl">{article.title}</h2>
              <p className="text-sm md:text-base text-justify">{truncateDescription(article.description, 7)}</p>
            </div>
            <a href={article.link} className="bg-greenPrimary self-start text-white font-medium md:font-semibold px-8 py-3 md:px-10 md:py-4 rounded-lg md:rounded-xl">
              Baca Artikel
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Artikel;
