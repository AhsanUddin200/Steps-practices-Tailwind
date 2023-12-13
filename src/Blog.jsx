import React from "react";

const Blog = () => {
  return (
    <div className="bg-pink-100 py-8 px-4">
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 grid-rows-2 bg-gray-100 shadow-lg gap-4 px-4 rounded-xl py-8 px-4">
        <div className="col-span-1 row-span-1 bg-white p-5  shadow-sm rounded-lg">
        <img
            className="mb-3 rounded-lg  w-full"
            src="https://picsum.photos/400/300"
            alt=""
          />
          <h2 className="font-bold mb-3">Blog title 1</h2>
          <p className="text-sm text-black mb-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
            assumenda porro inventore repellendus ipsum.
          </p>
        
          <a href="#" className="text-purple-700 font-bold">Read more</a>
        </div>
        <div className="col-span-1 row-span-1 bg-white p-5 shadow-sm rounded-lg ">

        <img
            className="mb-3 rounded-lg  w-full"
            src="https://picsum.photos/400/300?1"
            alt=""
          />
          <h2 className="font-bold mb-3">Blog title 2</h2>
          <p className="text-sm text-black mb-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
            assumenda porro inventore repellendus ipsum.
          </p>
        
          <a href="#" className="text-purple-700 font-bold">Read more</a>
        </div>

        <div className="col-span-1 row-span-1 bg-white p-5 shadow-sm rounded-lg ">
        <img
            className="mb-3 rounded-lg  w-full"
            src="https://picsum.photos/400/300?2"
            alt=""
          />
          <h2 className="font-bold mb-3">Blog title 3</h2>
          <p className="text-sm text-black mb-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
            assumenda porro inventore repellendus ipsum.
          </p>
        
          <a href="#" className="text-purple-700 font-bold">Read more</a>
        </div>

        <div className="col-span-1 row-span-1 bg-white p-5 shadow-sm rounded-lg">
        <img
            className="mb-3 rounded-lg  w-full"
            src="https://picsum.photos/400/300?5"
            alt=""
          />
          <h2 className="font-bold mb-3">Blog title 4</h2>
          <p className="text-sm text-black mb-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
            assumenda porro inventore repellendus ipsum.
          </p>
        
          <a href="#" className="text-purple-700 font-bold">Read more</a>
        </div>

        <div className="col-span-1 row-span-1 bg-white p-5 shadow-sm rounded-lg">
        <img
            className="mb-3 rounded-lg  w-full"
            src="https://picsum.photos/400/300"
            alt=""
          />
          <h2 className="font-bold mb-3">Blog title 5</h2>
          <p className="text-sm text-black mb-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
            assumenda porro inventore repellendus ipsum.
          </p>
        
          <a href="#" className="text-purple-700 font-bold">Read more</a>
        </div>

        <div className="col-span-1 row-span-1 bg-white p-5 shadow-sm rounded-lg">
        <img
            className="mb-3 rounded-lg  w-full"
            src="https://picsum.photos/400/300?7"
            alt=""
          />
          <h2 className="font-bold mb-3">Blog title 6</h2>
          <p className="text-sm text-black mb-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
            assumenda porro inventore repellendus ipsum.
          </p>
        
          <a href="#" className="text-purple-700 font-bold">Read more</a>
        </div>

      
      </div>
    </div>
  );
};

export default Blog;
