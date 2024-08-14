import React, { useState } from "react";
import "./App.css";
import ImageGallery from "./component/ImageGallery";
import ImageFullScreen from "./component/ImageFullScreen";

const images = [
  "https://images.pexels.com/photos/27439406/pexels-photo-27439406/free-photo-of-binh-minh-th-gian-khach-s-n-gi-ng.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/27469964/pexels-photo-27469964/free-photo-of-yeu-dan-ba-th-gian-d-ng.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/27585251/pexels-photo-27585251/free-photo-of-l-nh-tuy-t-den-va-tr-ng-n-c.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/27354543/pexels-photo-27354543/free-photo-of-thanh-ph-d-ng-ph-toa-nha-ki-n-truc-s.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/27495830/pexels-photo-27495830/free-photo-of-g-ti-p-th-th-i-trang-yeu.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/27586893/pexels-photo-27586893/free-photo-of-thanh-ph-d-ng-giao-thong-d-ng-ph.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/27531110/pexels-photo-27531110/free-photo-of-mon-an-binh-minh-cafein-ca-phe.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/26937707/pexels-photo-26937707/free-photo-of-ng-a-hoang-h-washoe.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/21033370/pexels-photo-21033370/free-photo-of-dan-ong-dan-ba-h-d-ng.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/20858050/pexels-photo-20858050/free-photo-of-bi-n-v-nh-mua-he-b-bi-n.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/16879010/pexels-photo-16879010/free-photo-of-con-gai-d-th-ng-d-ng-d-a-tr.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/19178362/pexels-photo-19178362/free-photo-of-mua-he-m-t-tr-i-v-n-cay.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/27244378/pexels-photo-27244378/free-photo-of-iceland-phong-c-nh-m-c-nui.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/27054259/pexels-photo-27054259/free-photo-of-th-i-trang-nh-ng-ng-i-dan-ba-th-gian.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/27546089/pexels-photo-27546089/free-photo-of-g-thu-v-t-d-ng-v-t-con-v-t.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
];

function App() {
  const [currImg, setCurrImg] = useState<number | null>(null);

  const handleDisplayImg = (imgIdx: number) => {
    setCurrImg(imgIdx);
  };

  const handleClose = () => {
    setCurrImg(null);
  };

  const handleChangeImg = (state: number) => {
    const length = images.length;
    const newImgIdx = (currImg! + state + length) % length;

    setCurrImg(newImgIdx);
  };

  return (
    <div className="App">
      <h1 className="text-3xl text-blue-500 font-bold text-center my-8">
        Interactive Image Gallery
      </h1>

      <ImageGallery images={images} onDisplayImg={handleDisplayImg} />

      <ImageFullScreen
        images={images}
        currentIdx={currImg}
        onCloseModal={handleClose}
        onChangeImg={handleChangeImg}
      />
    </div>
  );
}

export default App;
