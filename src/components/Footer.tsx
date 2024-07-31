import React from 'react';

const Footer = () => {
  const copyRight = new Date().getFullYear();
  return (
    <>
      <div className="bg-greenPrimary py-14 px-5 flex flex-col gap-y-16 justify-center items-center">
        <div className="flex flex-col items-center justify-center gap-y-4">
          <div className="flex flex-col items-center justify-center gap-y-3">
            <img src="/logo.png" alt="Logo Yaspendhar" className="w-[9rem] lg:w-[12rem]" />
            <h1 className="uppercase text-lg xl:text-2xl font-bold text-white text-center">Yayasan Pendidikan Harapan Medan</h1>
          </div>
          <p className="font-semibold text-white text-center text-sm md:text-base">Jl. Imam Bonjol No. 35 Medan Kelurangan Jati Kecamatan Medan Maimun 20152</p>
          <div className="flex gap-x-3 items-center">
            <a href="">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M26.9927 3.3335H13.0205C6.95142 3.3335 3.33331 6.9516 3.33331 13.0207V26.9762C3.33331 33.062 6.95142 36.6801 13.0205 36.6801H26.9761C33.0451 36.6801 36.6633 33.062 36.6633 26.9929V13.0207C36.6799 6.9516 33.0618 3.3335 26.9927 3.3335ZM20.0066 26.476C16.4385 26.476 13.5374 23.5749 13.5374 20.0068C13.5374 16.4387 16.4385 13.5376 20.0066 13.5376C23.5747 13.5376 26.4759 16.4387 26.4759 20.0068C26.4759 23.5749 23.5747 26.476 20.0066 26.476ZM29.8772 11.4701C29.7939 11.6701 29.6771 11.8536 29.5271 12.0203C29.3603 12.1703 29.1769 12.2871 28.9769 12.3704C28.7768 12.4538 28.56 12.5038 28.3433 12.5038C27.8931 12.5038 27.4763 12.3371 27.1595 12.0203C27.0094 11.8536 26.8927 11.6701 26.8093 11.4701C26.726 11.27 26.6759 11.0532 26.6759 10.8365C26.6759 10.6197 26.726 10.403 26.8093 10.2029C26.8927 9.98615 27.0094 9.81941 27.1595 9.65268C27.543 9.26919 28.1265 9.08579 28.6601 9.2025C28.7768 9.21917 28.8768 9.25252 28.9769 9.30254C29.0769 9.33589 29.1769 9.38591 29.277 9.4526C29.3603 9.50262 29.4437 9.58599 29.5271 9.65268C29.6771 9.81941 29.7939 9.98615 29.8772 10.2029C29.9606 10.403 30.0106 10.6197 30.0106 10.8365C30.0106 11.0532 29.9606 11.27 29.8772 11.4701Z"
                  fill="white"
                />
              </svg>
            </a>
            <a href="">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M36.6666 26.9835C36.6666 33.0502 33.05 36.6668 26.9833 36.6668H25C24.0833 36.6668 23.3333 35.9168 23.3333 35.0002V25.3835C23.3333 24.9335 23.7 24.5502 24.15 24.5502L27.0833 24.5002C27.3166 24.4835 27.5167 24.3168 27.5667 24.0835L28.15 20.9002C28.2 20.6002 27.9666 20.3168 27.65 20.3168L24.1 20.3668C23.6333 20.3668 23.2667 20.0002 23.25 19.5502L23.1833 15.4668C23.1833 15.2002 23.4 14.9668 23.6833 14.9668L27.6833 14.9002C27.9666 14.9002 28.1833 14.6835 28.1833 14.4002L28.1166 10.4001C28.1166 10.1168 27.9 9.90017 27.6167 9.90017L23.1166 9.96685C20.35 10.0168 18.15 12.2835 18.2 15.0502L18.2833 19.6335C18.3 20.1002 17.9333 20.4668 17.4667 20.4835L15.4666 20.5168C15.1833 20.5168 14.9667 20.7335 14.9667 21.0168L15.0167 24.1835C15.0167 24.4668 15.2333 24.6835 15.5166 24.6835L17.5167 24.6502C17.9833 24.6502 18.35 25.0168 18.3666 25.4668L18.5166 34.9668C18.5333 35.9002 17.7833 36.6668 16.85 36.6668H13.0166C6.94998 36.6668 3.33331 33.0501 3.33331 26.9668V13.0168C3.33331 6.95016 6.94998 3.3335 13.0166 3.3335H26.9833C33.05 3.3335 36.6666 6.95016 36.6666 13.0168V26.9835Z"
                  fill="white"
                />
              </svg>
            </a>
            <a href="">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M28.3334 6.6665H11.6667C6.66671 6.6665 3.33337 9.99984 3.33337 14.9998V24.9998C3.33337 29.9998 6.66671 33.3332 11.6667 33.3332H28.3334C33.3334 33.3332 36.6667 29.9998 36.6667 24.9998V14.9998C36.6667 9.99984 33.3334 6.6665 28.3334 6.6665ZM23.1501 21.7165L19.0333 24.1832C17.3667 25.1832 16 24.4165 16 22.4665V17.5165C16 15.5665 17.3667 14.7999 19.0333 15.7999L23.1501 18.2665C24.7334 19.2332 24.7334 20.7665 23.1501 21.7165Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
        </div>
        <p className="font-medium text-white text-center text-sm md:text-base">&copy; {copyRight} Yayasan Pendidikan Harapan Medan. All Rights Reserved.</p>
      </div>
    </>
  );
};

export default Footer;
