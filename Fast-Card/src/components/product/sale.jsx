import React from 'react';
import iimg from '../../assets/Frame 894.png';
import img55 from '../../assets/g92-2-500x500 1.png';

const Sale = () => {
  return (
    <div>
      <p className='text-[grey] p-[70px]'>
        Account / Gaming / <span className='text-black'>Product Name</span>
      </p>

      <div className="flex items-center justify-center gap-[30px]">
        
        <div className="num1">
          <img src={iimg} alt="Превью" />
        </div>

        <div className="num2">

          <h2 className='text-[24px] font-[600] mt-6'>
            Product Name
          </h2>

          <div className="flex items-center gap-[10px] mt-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path d="M13.9459 6.83189C15.0166 6.022 14.4439 4.31533 13.1013 4.31533H10.6722C10.0583 4.31533 9.51596 3.91536 9.33463 3.32884L8.61049 0.98653C8.20385 -0.328787 6.34205 -0.328787 5.93541 0.98653L5.21126 3.32884C5.02994 3.91536 4.48764 4.31533 3.87373 4.31533H1.40256C0.064368 4.31533 -0.511132 6.01289 0.551167 6.82669L2.66764 8.44808C3.1318 8.80365 3.32609 9.41024 3.15491 9.96932L2.38591 12.4809C1.98711 13.7834 3.49462 14.8305 4.57596 14.0021L6.42156 12.5882C6.92392 12.2034 7.62198 12.2034 8.12434 12.5882L9.95364 13.9896C11.0365 14.8192 12.5455 13.768 12.1426 12.4648L11.3629 9.94286C11.1889 9.37991 11.3859 8.76824 11.8559 8.41278L13.9459 6.83189Z" fill="#FFAD33"/>
              </svg>
            ))}
            <p className='text-[grey]'>(150 Reviews)</p>
            <p>|</p>
            <p className='font-[600] text-[17px] text-[#12CA5B]'>In Stock</p>
          </div>

          <h1 className='mt-[10px] text-[32px] font-[700]'>
            <span className="text-[#DB4444]">$120</span>
            <s className="text-gray-500 ml-4">$160</s>
          </h1>

          <p className='w-[373px] mt-[10px] font-[400] text-[#00000099] text-[14px]'>
            Описание товара. Здесь будет текст о характеристиках и преимуществах.
          </p>

          <hr className='w-[400px] mt-[20px]' />

          <p className='flex items-end gap-[10px] mt-[20px]'>
            Colours:{' '}
            <div
              className="w-6 h-6 rounded-full border-2 border-gray-300"
              style={{ backgroundColor: '#E07575' }}
            />
          </p>

          <p className='flex mt-[10px] items-center gap-[10px]'>
            Size: 
            <svg width="250" height="34" viewBox="0 0 250 34" fill="none">
              <rect x="0.5" y="0.5" width="41" height="33" rx="4.5" stroke="black" strokeOpacity="0.5"/>
            </svg>
          </p>

          <svg className='mt-[20px]' width="399" height="168" viewBox="0 0 399 168" fill="none">
            <rect x="0.5" y="0.5" width="398" height="167" rx="3.5" stroke="black" strokeOpacity="0.5"/>
          </svg>

        </div>
      </div>

      <div className="flex items-center gap-[10px] mt-20">
        <div className="bg-[#DB4444] rounded-[4px] w-[20px] h-[40px]"></div>
        <p className='text-[#DB4444] font-[600]'>Related Item</p>
      </div>

      <div className="num1 mt-8">
        <div className="bg-[#F5F5F5] rounded-[4px] p-[40px] w-[270px] sm:w-[300px]">
          <div className="flex items-start justify-between">
            <button className='bg-[#DB4444] ml-[-20px] mt-[-20px] text-white w-[55px] h-[26px] rounded-[4px]'>-40%</button>
            <img src={img55} alt="" />
          </div>
        </div>
        <div className="txt mt-4">
          <h1 className='font-medium text-[18px]'>HAVIT HV-G92 Gamepad</h1>
          <div className="flex items-center gap-[10px]">
            <p className='text-[#DB4444]'>$120</p>
            <s className='text-[grey]'>$160</s>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Sale;
