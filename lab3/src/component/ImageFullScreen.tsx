import React from "react";

interface ImageFullScreenProps {
  images: string[];
  currentIdx: number | null;
  onCloseModal: () => void;
  onChangeImg: (n: number) => void;
}

function ImageFullScreen({
  images,
  currentIdx,
  onCloseModal,
  onChangeImg,
}: ImageFullScreenProps) {
  if (currentIdx === null) return;

  return (
    <div
      onClick={onCloseModal}
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center transition-opacity duration-500 ease-in-out"
    >
      <div className="relative w-full h-full flex items-center justify-center max-w-4xl max-h-4xl overflow-hidden">
        <img
          src={images[currentIdx]}
          alt={`Fullscreen ${currentIdx}`}
          className="w-full h-5/6 object-contain"
        />
        <button
          onClick={(e) => {
            e.stopPropagation();

            onChangeImg(-1);
          }}
          className="absolute p-3 left-6 items-center justify-center text-white text-2xl bg-black bg-opacity-50 rounded-full"
        >
          &larr;
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();

            onChangeImg(1);
          }}
          className="absolute p-3 right-6 items-center justify-center text-white text-2xl bg-black bg-opacity-50 rounded-full"
        >
          &rarr;
        </button>
      </div>
    </div>
  );
}

export default ImageFullScreen;
