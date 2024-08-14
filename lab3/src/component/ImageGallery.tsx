import React from "react";

interface ImageGalleryProps {
  images: string[];
  onDisplayImg: (i: number) => void;
}

const ImageGallery = ({ images, onDisplayImg }: ImageGalleryProps) => {
  return (
    <div className="flex justify-center items-center p-6">
      <div className="flex flex-wrap gap-5 justify-center w-1/2 m-auto">
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => onDisplayImg(index)}
            className="flex items-center justify-center border border-zinc-300 rounded-lg w-40 h-40 overflow-hidden bg-black shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
