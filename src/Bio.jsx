import React from "react";

const Bio = () => {
  return (
    <div className="bg-pink-100 py-8 px-14 flex justify-center items-center">
     
     <div >
     <div className="grid grid-cols-1 grid-rows-6  shadow-xl p-6 w-80 h-80 bg-white rounded-xl ">
        <div className="col-span-1 row-span-6 flex flex-col items-center ">
        <img
        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=80"
        alt=""
        className="mb-6 rounded-full w-20 h-20 object-cover"
      />
        <p  className="mb-6 justify-center">
          <strong >Matt Cooper</strong> is a graphic designer at CircleAi. Lorem
          ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <a href="#" className="text-green-800 font-bold">View Profile</a>
      </div>
      </div>

     </div>
    </div>
  );
};

export default Bio;
