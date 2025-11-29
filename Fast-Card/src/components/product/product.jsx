import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Product = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('http://37.27.29.18:8002/Category/get-categories')
      .then(response => {
        setCategories(response.data.data);
        console.log(response.data.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <div className="flex items-center gap-5 px-12 py-8 text-gray-400">
        <span>Home /</span>
        <span className="text-black">Все категории</span>
      </div>

      <div className="px-12 pb-12">
        {categories.length == 0 ? (
          <p className="text-center text-gray-500 text-xl py-20">Загрузка категорий...</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className="bg-white rounded-xl shadow hover:shadow-2xl transition transform hover:-translate-y-2 cursor-pointer text-center p-6"
              >
                <div className="bg-gray-100 w-full h-48 rounded-lg overflow-hidden mb-4 flex items-center justify-center">
                  <img
                    src={`http://37.27.29.18:8002/Category/${cat.categoryImage}/get-categories`}
                    alt='xar'
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <h3 className="font-semibold text-lg line-clamp-2">{cat.categoryName}</h3>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;