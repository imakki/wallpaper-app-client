import React from 'react';
import ImageRender from './ImageRender';

const ImageComponent = ({ imageList }) => {
  return (
    <div className="w-4/12 mr-2">
      <ImageRender images={imageList} />
    </div>
  );
};

export default ImageComponent;
