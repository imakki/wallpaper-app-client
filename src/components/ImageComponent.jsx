import React, { useEffect } from 'react';
import ImageRender from './ImageRender';

const ImageComponent = ({ imageList }) => {
  return (
    <div className="w-4/12 mr-2">
      <ImageRender images={imageList} />
      {/* {imageList?.map((item) => {
        return <div key={item.id}>{item.author}</div>;
      })} */}
    </div>
  );
};

export default ImageComponent;
