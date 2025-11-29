import React from 'react'
import { Carousel } from 'antd';
import img4 from '../../assets/Frame 560.png'
import img5 from '../../assets/g92-2-500x500 1.png'
import img6 from '../../assets/Category-CellPhone.png'
import img9 from '../../assets/ps5-slim-goedkope-playstation_large 1.png'
import img7 from '../../assets/672462_ZAH9D_5626_002_100_0000_Light-The-North-Face-x-Gucci-coat 1.png'
import img10 from '../../assets/attractive-woman-wearing-hat-posing-black-background 1.png'
import img8 from '../../assets/Frame 694.png'
import img11 from '../../assets/Frame 707.png'
import img12 from '../../assets/Frame 706.png'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='body'>
      <div className="mt-[50px] flex flex-col lg:flex-row items-center justify-center gap-[30px] px-4 lg:px-0">
        <div className="num1 w-full lg:w-auto">
          <div className="flex text-[18px] gap-[40px] justify-between lg:justify-start">
            <p>Woman’s Fashion</p>
            <p><svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.95 6.364L0 1.414L1.414 0L7.778 6.364L1.414 12.728L0 11.314L4.95 6.364Z" fill="black"/>
</svg></p>
          </div>
          <div className="flex mt-[10px] text-[18px] gap-[60px] justify-between lg:justify-start">
            <p>Men’s Fashion</p>
            <p><svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.95 6.364L0 1.414L1.414 0L7.778 6.364L1.414 12.728L0 11.314L4.95 6.364Z" fill="black"/>
</svg></p>
          </div>
          <p className='mt-[10px] text-[16px]'>Electronics</p>
          <p className='mt-[10px] text-[16px]'>Home & Lifestyle</p>
          <p className='mt-[10px] text-[16px]'>Medicine</p>
          <p className='mt-[10px] text-[16px]'>Sports & Outdoor</p>
          <p className='mt-[10px] text-[16px]'>Baby’s & Toys</p>
          <p className='mt-[10px] text-[16px]'>Groceries & Pets</p>
          <p className='mt-[10px] text-[16px]'>Health & Beauty</p>
        </div>

        <Carousel className='h-[344px] rounded-[20px] lg:w-[892px] w-[400px]' autoplay>
          <div><img src={img4} alt="" className="w-full h-full object-cover rounded-[20px]" /></div>
          <div><img src={img4} alt="" className="w-full h-full object-cover rounded-[20px]" /></div>
          <div><img src={img4} alt="" className="w-full h-full object-cover rounded-[20px]" /></div>
          <div><img src={img4} alt="" className="w-full h-full object-cover rounded-[20px]" /></div>
        </Carousel>

      </div>

      <div className="flex flex-col sm:flex-row items-center gap-[20px] p-[50px] ml-[25px] sm:ml-0">
        <div className="w-[20px] h-[40px] bg-[#DB4444] rounded-[4px]"></div>
        <p className='text-[#DB4444] font-bold'>Today’s</p>
      </div>

      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full px-4 lg:px-20">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-[20px] lg:gap-[70px]">
          <h1 className='text-[28px] sm:text-[36px] font-bold'>Flash Sales</h1>
          <div className="flex items-center gap-[10px]">
            <div className="num text-center">
              <p className="text-sm">Days</p>
              <h1 className='text-[32px]'>03</h1>
            </div>
            <p className='text-[#E07575] text-[18px] font-bold mt-[20px]'>:</p>
            <div className="num text-center">
              <p className="text-sm">Hours</p>
              <h1 className='text-[32px]'>23</h1>
            </div>
            <p className='text-[#E07575] text-[18px] font-bold mt-[20px]'>:</p>
            <div className="num text-center">
              <p className="text-sm">Minutes</p>
              <h1 className='text-[32px]'>19</h1>
            </div>
            <p className='text-[#E07575] text-[18px] font-bold mt-[20px]'>:</p>
            <div className="num text-center">
              <p className="text-sm">Seconds</p>
              <h1 className='text-[32px]'>56</h1>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-[20px] mt-6 lg:mt-0">
          <div className="bg-[#F5F5F5] p-[10px] rounded-[50%] cursor-pointer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M11 5L4 12L11 19M4 12H20" stroke="black" strokeWidth="2"/></svg>
          </div>
          <div className="bg-[#F5F5F5] p-[10px] rounded-[50%] cursor-pointer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M3.5 12H20M20 12L13 5M20 12L13 19" stroke="black" strokeWidth="1.5"/></svg>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-[20px] px-4 lg:px-20 mt-[20px] justify-items-center">
        
        <div className="num1">
          <div className="bg-[#F5F5F5] rounded-[4px] p-[40px] w-[270px] sm:w-[300px]">
            <div className="flex items-start justify-between ">
              <button className='bg-[#DB4444] ml-[-20px] mt-[-20px] text-white w-[55px] h-[26px] rounded-[4px]'>-40%</button>
              <img src={img5} alt="" />
              <div className="non ml-[20px] mt-[-20px]">
                <svg className='num11' width="34" height="34" viewBox="0 0 34 34" fill="none">
                  <circle cx="17" cy="17" r="17" fill="white"/>
                  <path d="M13 10C10.7912 10 9 11.7396 9 13.8859C9 15.6185 9.7 19.7305 16.5904 23.8873C16.7138 23.961 16.8555 24 17 24C17.1445 24 17.2862 23.961 17.4096 23.8873C24.3 19.7305 25 15.6185 25 13.8859C25 11.7396 23.2088 10 21 10C18.7912 10 17 12.3551 17 12.3551C17 12.3551 15.2088 10 13 10Z" stroke="black" strokeWidth="1.5"/>
                </svg>
                <svg className='mt-[10px] num11 num123' width="34" height="34" viewBox="0 0 34 34" fill="none">
                  <circle cx="17" cy="17" r="17" fill="white"/>
                  <path d="M26.257 15.962C26.731 16.582 26.731 17.419 26.257 18.038C24.764 19.987 21.182 24 17 24C12.818 24 9.23601 19.987 7.74301 18.038C7.51239 17.7411 7.38721 17.3759 7.38721 17C7.38721 16.6241 7.51239 16.2589 7.74301 15.962C9.23601 14.013 12.818 10 17 10C21.182 10 24.764 14.013 26.257 15.962V15.962Z" stroke="black" strokeWidth="1.5"/>
                  <path d="M17 20C18.6569 20 20 18.6569 20 17C20 15.3431 18.6569 14 17 14C15.3431 14 14 15.3431 14 17C14 18.6569 15.3431 20 17 20Z" stroke="black" strokeWidth="1.5"/>
                </svg>
              </div>
            </div>
          </div>
          <div className="txt mt-4">
            <h1 className='font-medium text-[18px]'>HAVIT HV-G92 Gamepad</h1>
            <div className="flex items-center gap-[10px]">
              <p className='text-[#DB4444]'>$120</p>
              <s className='text-[grey]'>$160</s>
            </div>
            <div className="flex items-center gap-[5px] mt-[10px]">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                  <path d="M13.9459 6.83189C15.0166 6.022 14.4439 4.31533 13.1013 4.31533H10.6722C10.0583 4.31533 9.51596 3.91536 9.33463 3.32884L8.61049 0.98653C8.20385 -0.328787 6.34205 -0.328787 5.93541 0.98653L5.21126 3.32884C5.02994 3.91536 4.48764 4.31533 3.87373 4.31533H1.40256C0.064368 4.31533 -0.511132 6.01289 0.551167 6.82669L2.66764 8.44808C3.1318 8.80365 3.32609 9.41024 3.15491 9.96932L2.38591 12.4809C1.98711 13.7834 3.49462 14.8305 4.57596 14.0021L6.42156 12.5882C6.92392 12.2034 7.62198 12.2034 8.12434 12.5882L9.95364 13.9896C11.0365 14.8192 12.5455 13.768 12.1426 12.4648L11.3629 9.94286C11.1889 9.37991 11.3859 8.76824 11.8559 8.41278L13.9459 6.83189Z" fill="#FFAD33"/>
                </svg>
=              <p className='text-[grey]'>(88)</p>
            </div>
          </div>
        </div>

      </div>

      <div className="text-center mt-12">
        <Link to={'/product'}>
        <button className="bg-[#DB4444] text-white px-12 py-4 rounded hover:bg-red-700 transition">
          View All Products
        </button>
        </Link>
      </div>

       <div className="flex flex-col sm:flex-row items-center gap-[20px] p-[50px] ml-[25px] sm:ml-0">
        <div className="w-[20px] h-[40px] bg-[#DB4444] rounded-[4px]"></div>
        <p className='text-[#DB4444] font-bold'>Today’s</p>
      </div>
       <div className="flex flex-col justify-between  m-auto lg:flex-row items-start lg:items-center gap-[20px] lg:gap-[70px]">
          <h1 className='text-[28px] ml-[50px] sm:text-[36px] font-bold'>Browse By Category</h1>
          <div className="flex items-center gap-[20px] mt-6 lg:mt-0 mr-[60px]">
          <div className="bg-[#F5F5F5] p-[10px] rounded-[50%] cursor-pointer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M11 5L4 12L11 19M4 12H20" stroke="black" strokeWidth="2"/></svg>
          </div>
          <div className="bg-[#F5F5F5] p-[10px] rounded-[50%] cursor-pointer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M3.5 12H20M20 12L13 5M20 12L13 19" stroke="black" strokeWidth="1.5"/></svg>
          </div>
        </div>
        </div>
        <div className="mt-[10px]">
  <div className="overflow-x-auto hide-scrollbar">
    <div className="flex justify-evenly gap-6 px-4 py-2 w-max min-w-full">
      <div className="border-[2px] rounded-[4px] border-gray-400 w-[170px] h-[145px] flex-shrink-0 flex items-center justify-center">
        <div className="text-center">
          <img src={img6} alt="" className="w-16 h-16 mx-auto" />
          <p className='mt-[5px] text-sm'>Phones</p>
        </div>
      </div>
      
      <div className="border-[2px] rounded-[4px] border-gray-400 w-[170px] h-[145px] flex-shrink-0 flex items-center justify-center">
        <div className="text-center">
          <img src={img6} alt="" className="w-16 h-16 mx-auto" />
          <p className='mt-[5px] text-sm'>Phones</p>
        </div>
      </div>
      
      <div className="border-[2px] rounded-[4px] border-gray-400 w-[170px] h-[145px] flex-shrink-0 flex items-center justify-center">
        <div className="text-center">
          <img src={img6} alt="" className="w-16 h-16 mx-auto" />
          <p className='mt-[5px] text-sm'>Phones</p>
        </div>
      </div>
      
      <div className="border-[2px] rounded-[4px] border-gray-400 w-[170px] h-[145px] flex-shrink-0 flex items-center justify-center">
        <div className="text-center">
          <img src={img6} alt="" className="w-16 h-16 mx-auto" />
          <p className='mt-[5px] text-sm'>Phones</p>
        </div>
      </div>
      
      <div className="border-[2px] rounded-[4px] border-gray-400 w-[170px] h-[145px] flex-shrink-0 flex items-center justify-center">
        <div className="text-center">
          <img src={img6} alt="" className="w-16 h-16 mx-auto" />
          <p className='mt-[5px] text-sm'>Phones</p>
        </div>
      </div>
      
      <div className="border-[2px] rounded-[4px] border-gray-400 w-[170px] h-[145px] flex-shrink-0 flex items-center justify-center">
        <div className="text-center">
          <img src={img6} alt="" className="w-16 h-16 mx-auto" />
          <p className='mt-[5px] text-sm'>Phones</p>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="flex flex-col sm:flex-row mt-[100px] items-center gap-[20px] p-[50px] ml-[25px] sm:ml-0">
        <div className="w-[20px] h-[40px] bg-[#DB4444] rounded-[4px]"></div>
        <p className='text-[#DB4444] font-bold'>This Month</p>
      </div>
<div className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full px-4 lg:px-20">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-[20px] lg:gap-[70px]">
          <h1 className='text-[28px] sm:text-[36px] font-bold'>Flash Sales</h1>
        </div>
        <button className='w-[159px] h-[56px]'>View All</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-[20px] px-4 lg:px-20 mt-[20px] justify-items-center">
        
        <div className="num1">
          <div className="bg-[#F5F5F5] rounded-[4px] p-[40px] w-[270px] sm:w-[300px]">
            <div className="flex items-start justify-between ">
              <button className='bg-[#DB4444] ml-[-20px] mt-[-20px] text-white w-[55px] h-[26px] rounded-[4px]'>-40%</button>
              <img src={img7} width={'172px'} height={'152px'} alt="" />
              <div className="non ml-[20px] mt-[-20px]">
                <svg className='num11' width="34" height="34" viewBox="0 0 34 34" fill="none">
                  <circle cx="17" cy="17" r="17" fill="white"/>
                  <path d="M13 10C10.7912 10 9 11.7396 9 13.8859C9 15.6185 9.7 19.7305 16.5904 23.8873C16.7138 23.961 16.8555 24 17 24C17.1445 24 17.2862 23.961 17.4096 23.8873C24.3 19.7305 25 15.6185 25 13.8859C25 11.7396 23.2088 10 21 10C18.7912 10 17 12.3551 17 12.3551C17 12.3551 15.2088 10 13 10Z" stroke="black" strokeWidth="1.5"/>
                </svg>
                <svg className='mt-[10px] num11 num123' width="34" height="34" viewBox="0 0 34 34" fill="none">
                  <circle cx="17" cy="17" r="17" fill="white"/>
                  <path d="M26.257 15.962C26.731 16.582 26.731 17.419 26.257 18.038C24.764 19.987 21.182 24 17 24C12.818 24 9.23601 19.987 7.74301 18.038C7.51239 17.7411 7.38721 17.3759 7.38721 17C7.38721 16.6241 7.51239 16.2589 7.74301 15.962C9.23601 14.013 12.818 10 17 10C21.182 10 24.764 14.013 26.257 15.962V15.962Z" stroke="black" strokeWidth="1.5"/>
                  <path d="M17 20C18.6569 20 20 18.6569 20 17C20 15.3431 18.6569 14 17 14C15.3431 14 14 15.3431 14 17C14 18.6569 15.3431 20 17 20Z" stroke="black" strokeWidth="1.5"/>
                </svg>
              </div>
            </div>
          </div>
          <div className="txt mt-4">
            <h1 className='font-medium text-[18px]'>HAVIT HV-G92 Gamepad</h1>
            <div className="flex items-center gap-[10px]">
              <p className='text-[#DB4444]'>$120</p>
              <s className='text-[grey]'>$160</s>
            </div>
            <div className="flex items-center gap-[5px] mt-[10px]">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                  <path d="M13.9459 6.83189C15.0166 6.022 14.4439 4.31533 13.1013 4.31533H10.6722C10.0583 4.31533 9.51596 3.91536 9.33463 3.32884L8.61049 0.98653C8.20385 -0.328787 6.34205 -0.328787 5.93541 0.98653L5.21126 3.32884C5.02994 3.91536 4.48764 4.31533 3.87373 4.31533H1.40256C0.064368 4.31533 -0.511132 6.01289 0.551167 6.82669L2.66764 8.44808C3.1318 8.80365 3.32609 9.41024 3.15491 9.96932L2.38591 12.4809C1.98711 13.7834 3.49462 14.8305 4.57596 14.0021L6.42156 12.5882C6.92392 12.2034 7.62198 12.2034 8.12434 12.5882L9.95364 13.9896C11.0365 14.8192 12.5455 13.768 12.1426 12.4648L11.3629 9.94286C11.1889 9.37991 11.3859 8.76824 11.8559 8.41278L13.9459 6.83189Z" fill="#FFAD33"/>
                </svg>
              <p className='text-[grey]'>(88)</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black text-white w-full mt-[40px] py-12 sm:py-16">
  <div className="w-[90%] max-w-7xl mx-auto">

    <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0">

      <div className="text-center lg:text-left max-w-lg">
        <p className="text-[#00FF66] text-sm sm:text-base">Categories</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-semibold leading-tight mt-2">
          Enhance Your<br className="hidden sm:block" /> Music Experience
        </h1>

        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 mt-6">
          <svg width="320" height="62" viewBox="0 0 320 62" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[320px] sm:w-auto">
            <circle cx="31" cy="31" r="31" fill="white"/>
            <path d="M23.052 27.472C24.076 26.6187 24.892 25.9093 25.5 25.344C26.108 24.768 26.6147 24.1707 27.02 23.552C27.4253 22.9333 27.628 22.3253 27.628 21.728C27.628 21.184 27.5 20.7573 27.244 20.448C26.988 20.1387 26.5933 19.984 26.06 19.984C25.5267 19.984 25.116 20.1653 24.828 20.528C24.54 20.88 24.3907 21.3653 24.38 21.984H22.204C22.2467 20.704 22.6253 19.7333 23.34 19.072C24.0653 18.4107 24.9827 18.08 26.092 18.08C27.308 18.08 28.2413 18.4053 28.892 19.056C29.5427 19.696 29.868 20.544 29.868 21.6C29.868 22.432 29.644 23.2267 29.196 23.984C28.748 24.7413 28.236 25.4027 27.66 25.968C27.084 26.5227 26.332 27.1947 25.404 27.984H30.124V29.84H22.22V28.176L23.052 27.472ZM31.5675 21.408C31.6208 20.3413 31.9942 19.52 32.6875 18.944C33.3915 18.3573 34.3142 18.064 35.4555 18.064C36.2342 18.064 36.9008 18.2027 37.4555 18.48C38.0102 18.7467 38.4262 19.1147 38.7035 19.584C38.9915 20.0427 39.1355 20.5653 39.1355 21.152C39.1355 21.824 38.9595 22.3947 38.6075 22.864C38.2662 23.3227 37.8555 23.632 37.3755 23.792V23.856C37.9942 24.048 38.4742 24.3893 38.8155 24.88C39.1675 25.3707 39.3435 26 39.3435 26.768C39.3435 27.408 39.1942 27.9787 38.8955 28.48C38.6075 28.9813 38.1755 29.376 37.5995 29.664C37.0342 29.9413 36.3515 30.08 35.5515 30.08C34.3462 30.08 33.3648 29.776 32.6075 29.168C31.8502 28.56 31.4502 27.664 31.4075 26.48H33.5835C33.6048 27.0027 33.7808 27.424 34.1115 27.744C34.4528 28.0533 34.9168 28.208 35.5035 28.208C36.0475 28.208 36.4635 28.0587 36.7515 27.76C37.0502 27.4507 37.1995 27.056 37.1995 26.576C37.1995 25.936 36.9968 25.4773 36.5915 25.2C36.1862 24.9227 35.5568 24.784 34.7035 24.784H34.2395V22.944H34.7035C36.2182 22.944 36.9755 22.4373 36.9755 21.424C36.9755 20.9653 36.8368 20.608 36.5595 20.352C36.2928 20.096 35.9035 19.968 35.3915 19.968C34.8902 19.968 34.5008 20.1067 34.2235 20.384C33.9568 20.6507 33.8022 20.992 33.7595 21.408H31.5675Z" fill="black"/>
            <circle cx="117" cy="31" r="31" fill="white"/>
          </svg>

          <button className="w-full sm:w-auto px-8 py-4 bg-[#00FF66] text-black rounded-md font-medium hover:bg-green-400 transition mt-6 lg:mt-8">
            Buy Now!
          </button>
        </div>
      </div>

      <div className="w-full max-w-md lg:max-w-none">
        <img 
          src={img8} 
          alt="Music Experience" 
          className="w-full h-auto rounded-xl"
        />
      </div>

    </div>
  </div>
</div>

      <div className="flex flex-col sm:flex-row items-center gap-[20px] p-[50px] ml-[25px] sm:ml-0">
        <div className="w-[20px] h-[40px] bg-[#DB4444] rounded-[4px]"></div>
        <p className='text-[#DB4444] font-bold'>Today’s</p>
      </div>

      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full px-4 lg:px-20">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-[20px] lg:gap-[70px]">
          <h1 className='text-[28px] sm:text-[36px] font-bold'>Flash Sales</h1>
        </div>

        <div className="flex items-center gap-[20px] mt-6 lg:mt-0">
          <div className="bg-[#F5F5F5] p-[10px] rounded-[50%] cursor-pointer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M11 5L4 12L11 19M4 12H20" stroke="black" strokeWidth="2"/></svg>
          </div>
          <div className="bg-[#F5F5F5] p-[10px] rounded-[50%] cursor-pointer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M3.5 12H20M20 12L13 5M20 12L13 19" stroke="black" strokeWidth="1.5"/></svg>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-[20px] px-4 lg:px-20 mt-[20px] justify-items-center">
        <div className="num1">
          <div className="bg-[#F5F5F5] rounded-[4px] p-[40px] w-[270px] sm:w-[300px]">
            <div className="flex items-start justify-between ">
              <button className='bg-[#DB4444] ml-[-20px] mt-[-20px] text-white w-[55px] h-[26px] rounded-[4px]'>-40%</button>
              <img src={img5} alt="" />
              <div className="non ml-[20px] mt-[-20px]">
                <svg className='num11' width="34" height="34" viewBox="0 0 34 34" fill="none">
                  <circle cx="17" cy="17" r="17" fill="white"/>
                  <path d="M13 10C10.7912 10 9 11.7396 9 13.8859C9 15.6185 9.7 19.7305 16.5904 23.8873C16.7138 23.961 16.8555 24 17 24C17.1445 24 17.2862 23.961 17.4096 23.8873C24.3 19.7305 25 15.6185 25 13.8859C25 11.7396 23.2088 10 21 10C18.7912 10 17 12.3551 17 12.3551C17 12.3551 15.2088 10 13 10Z" stroke="black" strokeWidth="1.5"/>
                </svg>
                <svg className='mt-[10px] num11 num123' width="34" height="34" viewBox="0 0 34 34" fill="none">
                  <circle cx="17" cy="17" r="17" fill="white"/>
                  <path d="M26.257 15.962C26.731 16.582 26.731 17.419 26.257 18.038C24.764 19.987 21.182 24 17 24C12.818 24 9.23601 19.987 7.74301 18.038C7.51239 17.7411 7.38721 17.3759 7.38721 17C7.38721 16.6241 7.51239 16.2589 7.74301 15.962C9.23601 14.013 12.818 10 17 10C21.182 10 24.764 14.013 26.257 15.962V15.962Z" stroke="black" strokeWidth="1.5"/>
                  <path d="M17 20C18.6569 20 20 18.6569 20 17C20 15.3431 18.6569 14 17 14C15.3431 14 14 15.3431 14 17C14 18.6569 15.3431 20 17 20Z" stroke="black" strokeWidth="1.5"/>
                </svg>
              </div>
            </div>
          </div>
          <div className="txt mt-4">
            <h1 className='font-medium text-[18px]'>HAVIT HV-G92 Gamepad</h1>
            <div className="flex items-center gap-[10px]">
              <p className='text-[#DB4444]'>$120</p>
              <s className='text-[grey]'>$160</s>
            </div>
            <div className="flex items-center gap-[5px] mt-[10px]">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                  <path d="M13.9459 6.83189C15.0166 6.022 14.4439 4.31533 13.1013 4.31533H10.6722C10.0583 4.31533 9.51596 3.91536 9.33463 3.32884L8.61049 0.98653C8.20385 -0.328787 6.34205 -0.328787 5.93541 0.98653L5.21126 3.32884C5.02994 3.91536 4.48764 4.31533 3.87373 4.31533H1.40256C0.064368 4.31533 -0.511132 6.01289 0.551167 6.82669L2.66764 8.44808C3.1318 8.80365 3.32609 9.41024 3.15491 9.96932L2.38591 12.4809C1.98711 13.7834 3.49462 14.8305 4.57596 14.0021L6.42156 12.5882C6.92392 12.2034 7.62198 12.2034 8.12434 12.5882L9.95364 13.9896C11.0365 14.8192 12.5455 13.768 12.1426 12.4648L11.3629 9.94286C11.1889 9.37991 11.3859 8.76824 11.8559 8.41278L13.9459 6.83189Z" fill="#FFAD33"/>
                </svg>
              <p className='text-[grey]'>(88)</p>
            </div>
          </div>
        </div>

      </div>

      <section className="bg-black text-white py-12 lg:py-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="mb-8 lg:mb-16">
      <span className="inline-block bg-red-600 text-white px-5 py-2 rounded text-sm font-semibold tracking-wider">
        Featured
      </span>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-20">
      <div className="relative rounded-3xl overflow-hidden group">
        <img 
          src={img9} 
          alt="PlayStation 5" 
          className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 max-w-sm">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">PlayStation 5</h2>
          <p className="text-gray-300 text-sm sm:text-base mb-4 leading-relaxed">
            Black and White version of the PS5 coming out on sale.
          </p>
          <button className="text-white font-medium border-b-2 border-white pb-1 hover:border-gray-300 transition">
            Shop Now
          </button>
        </div>
      </div>
      <div className="relative rounded-3xl overflow-hidden">
        <img 
          src={img10} 
          alt="Women’s Collections" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 p-8 sm:p-12 lg:p-16 text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Women’s Collections
          </h2>
          <p className="text-gray-200 text-sm sm:text-base mb-6 max-w-md">
            Featured woman collections that give you another vibe.
          </p>
          <button className="text-white font-medium border-b-2 border-white pb-1 hover:border-gray-300 transition">
            Shop Now
          </button>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="bg-gray-900 rounded-2xl overflow-hidden hover:bg-gray-800 transition">
        <div className="h-48 lg:h-64">
          <img 
            src={img11} 
            alt="Speakers" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">Speakers</h3>
          <p className="text-gray-400 text-sm mb-4">Amazon wireless speakers</p>
          <button className="text-white font-medium border-b-2 border-white pb-1 hover:border-gray-300 transition">
            Shop Now
          </button>
        </div>
      </div>
      <div className="bg-gray-900 rounded-2xl overflow-hidden hover:bg-gray-800 transition">
        <div className="h-48 lg:h-64">
          <img 
            src={img12} 
            alt="Perfume" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">Perfume</h3>
          <p className="text-gray-400 text-sm mb-4">GUCCI INTENSE OUD EDP</p>
          <button className="text-white font-medium border-b-2 border-white pb-1 hover:border-gray-300 transition">
            Shop Now
          </button>
        </div>
      </div>

    </div>
  </div>
</section>
    
    </div>
  )
}

export default Home