import React from "react";
import { useNavigate } from "react-router-dom";
import PageTemplate from "../components/PageTemplate";

function Contact() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <PageTemplate pageIntro="This is contact">
      <button onClick={handleBack} className="mt-4 text-blue-400 text-lg">
        Back to home
      </button>
    </PageTemplate>
  );
}

export default Contact;
