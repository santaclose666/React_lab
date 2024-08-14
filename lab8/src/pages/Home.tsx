import React from "react";
import { Link } from "react-router-dom";
import PageTemplate from "../components/PageTemplate";

function Home() {
  return (
    <PageTemplate pageIntro="This is home page">
      <Link to={"/about"} className="mt-4 text-blue-500 hover:text-gray-300">
        Go to About
      </Link>
      <Link to={"/contact"} className="mt-4 text-rose-500 hover:text-gray-300">
        Go to Contact
      </Link>
    </PageTemplate>
  );
}

export default Home;
