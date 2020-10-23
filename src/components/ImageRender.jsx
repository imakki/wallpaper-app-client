import React from 'react';
import '../styles/custom.css';
const ImageRender = ({ images }) => {
  console.log(images);
  return images?.map((item) => {
    return (
      <div
        key={item.id}
        className="container-hover transition duration-500 ease-in-out transform scale-90 hover:-translate-y-1 hover:scale-100"
      >
        <img
          src={item.download_url}
          alt={item.author}
          width={item.width}
          height={item.height}
        />
        <div className="overlay"></div>
        <div className="button">
          <button onClick={() => console.log('clicked')}>
            <i class="fas fa-heart"></i>
          </button>
          <button onClick={() => console.log('clicked')}>
            <i class="fas fa-download"></i>
          </button>
          <p>{item.author}</p>
          {/* <a href="#"> BUTTON </a>{' '} */}
        </div>

        {/* <div className="flex justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Like
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Download
          </button>
        </div> */}
      </div>
    );
  });
};

export default ImageRender;
