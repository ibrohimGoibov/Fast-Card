import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import iimg from '../../assets/Frame 894.png';
import img55 from '../../assets/g92-2-500x500 1.png';

const Sale = () => {
  const { id } = useParams();
  const [data, setData] = useState(null); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getById() {
      try {
        const res = await axios.get(
          `http://37.27.29.18:8002/Product/get-product-by-id?id=${id}`
        );
        setData(res.data.data); 
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    if (id) getById();
  }, [id]);
  
  if (loading) {
    return <div className="text-center py-20 text-2xl">Загрузка...</div>;
  }

  if (!data) {
    return <div className="text-center py-20 text-red-500">LUSER</div>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <p className="text-gray-500 text-lg mb-8 pl-16">
        Account / Gaming / <span className="text-black font-semibold">{data.productName}</span>
      </p>

      <div className="flex flex-col lg:flex-row items-start justify-center gap-12">
        <div className="num1">
          <img
            src={`http://37.27.29.18:8002/images/${data.image}`}
            alt={data.productName}
            className="w-full max-w-lg rounded-xl shadow-xl"
          />
        </div>

        <div className="num2 max-w-lg">
          <h2 className="text-3xl font-bold mt-6">{data.productName}</h2>

          <div className="flex items-center gap-3 mt-4">
            <div className="flex text-yellow-500">
              ★★★★☆
            </div>
            <p className="text-gray-500">(150 Reviews)</p>
            <span>|</span>
            <p className="font-semibold text-green-600 text-lg">In Stock</p>
          </div>

          <h1 className="mt-6 text-4 text-4xl font-bold text-red-600">
            ${data.discountPrice}
          </h1>

          <p className="mt-6 text-gray-700 text-sm leading-relaxed w-[300px]">
            PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal. Pressure sensitive.
          </p>

          <hr className="my-8 border-gray-300 w-full" />

          <div className="flex items-center gap-4 mt-8">
            <span>Colours:</span>
            <div className="w-8 h-8 rounded-full bg-red-500 ring-4 ring-gray-300"></div>
            <div className="w-8 h-8 rounded-full bg-black"></div>
          </div>

          <div className="flex items-center gap-4 mt-6">
            <span>Size:</span>
            <button className="w-12 h-10 border rounded hover:bg-red-500 hover:text-white transition">XS</button>
            <button className="w-12 h-10 border rounded hover:bg-red-500 hover:text-white transition">S</button>
            <button className="w-12 h-10 border rounded hover:bg-red-500 hover:text-white transition">M</button>
            <button className="w-12 h-10 border rounded hover:bg-red-500 hover:text-white transition">L</button>
            <button className="w-12 h-10 border rounded hover:bg-red-500 hover:text-white transition">XL</button>
          </div>

          <div className="flex items-center gap-6 mt-10">
            <div className="flex border rounded-lg overflow-hidden">
              <button className="px-6 py-3 text-xl hover:bg-gray-100">−</button>
              <span className="px-8 py-3 text-lg font-bold">1</span>
              <button className="px-6 py-3 text-xl hover:bg-gray-100">+</button>
            </div>
            <button className="bg-red-500 text-white px-12 py-4 rounded-lg text-lg font-medium hover:bg-red-600">
              Buy Now
            </button>
            <button className="border p-4 rounded-lg text-2xl hover:bg-gray-100">♡</button>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-5 h-10 bg-red-500 rounded"></div>
          <p className="text-red-500 font-bold text-xl">Related Item</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="relative bg-gray-100 rounded-lg p-8">
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-3 py-1 rounded">-40%</span>
              <img src={img55} alt="Gamepad" className="mx-auto" />
            </div>
            <h3 className="mt-4 font-medium">HAVIT HV-G92 Gamepad</h3>
            <div className="mt-2">
              <span className="text-red-500 font-bold">$120</span>
              <del className="text-gray-500 ml-2">$160</del>
            </div>
            <div className="flex justify-center mt-2 text-yellow-500">★★★★☆ <span className="text-gray-500 ml-2">(88)</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sale;