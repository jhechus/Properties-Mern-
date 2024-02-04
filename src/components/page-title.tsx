import React from "react";

function PageTitle({ title }: { title: string }) {
  return (
    <div>
      <h1 className=" text-xl font-bold text-primary mb-5"> {title} </h1>
    </div>
  );
}

export default PageTitle;
