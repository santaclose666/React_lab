import React, { useState } from "react";
import "./App.css";
import Header from "./component/Header";

const tabList = ["Trang chủ", "Giới thiệu", "Dịch vụ", "Dự án", "Liên hệ"];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <Header
        tabList={tabList}
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
      />
    </div>
  );
}

export default App;
