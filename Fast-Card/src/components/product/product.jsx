import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

const Product = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('http://37.27.29.18:8002/Category/get-categories')
      .then((res) => {
        console.log(res.data);
        setData(res.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <div className="flex items-center gap-5 px-12 py-8 text-gray-400">
        <span>Home /</span>
        <span className="text-black">Все категории</span>
      </div>

      <div className="container">
  <Button
        style={{ maxWidth: "200px", display: "flex", justifySelf: "start", marginTop: '-60px' }}
        className="logB"
      >
        Categories
      </Button>
  <div class="hidden-content">
    {data.map((cat) => (
      <div>
        <div className="flex items-center justify-evenly">
          <div className="">
        <h3 className="">{cat.categoryName}</h3>
        <img src={`http://37.27.29.18:8002/images/${cat.categoryImage}`} alt={cat.categoryName} width={'100px'} className="max-h-full max-w-full object-contain" onError={(e) => (e.target.src = 'https://via.placeholder.com/200?text=No+Image')}/>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
      
      <div className="px-12 pb-12 mt-[100px]">
        <div className=" grid-cols lg:grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8">
          {data.map((cat) => (
            <Link to={`/sale/${cat.id}`}>
            <div
              key={cat.id}
              className="bg-white rounded-xl shadow hover:shadow-2xl transition transform hover:-translate-y-2 cursor-pointer text-center p-6"
            >
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48 mb-4 flex items-center justify-center overflow-hidden">
                <img
                  src={`http://37.27.29.18:8002/images/${cat.categoryImage}`}
                  alt={cat.categoryName}
                  className="max-h-full max-w-full object-contain"
                  onError={(e) => (e.target.src = 'https://via.placeholder.com/200?text=No+Image')}
                />
              </div>
              <h3 className="font-semibold text-lg line-clamp-2">{cat.categoryName}</h3>
            </div>
          </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;