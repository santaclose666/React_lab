import React from "react";

interface PageTemplateProps {
  pageIntro: string;
  children: React.ReactNode;
}

function PageTemplate({ pageIntro, children }: PageTemplateProps) {
  return (
    <div className="flex flex-col h-screen items-center justify-center ">
      <p className="text-5xl font-bold">{pageIntro}</p>
      {children}
    </div>
  );
}

export default PageTemplate;
