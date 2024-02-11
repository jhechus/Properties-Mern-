import LinkButton from "@/components/link-button";
import prisma from "@/config/db";
import { Property } from "@prisma/client";
import React from "react";
import { Carousel } from "antd";

interface Props {
  params: {
    id: string;
  };
}

async function PropertyPage({ params: { id } }: Props) {
  const property: Property = (await prisma.property.findUnique({
    where: { id },
  })) as Property;

  return (
    <div>
      <LinkButton title="Back to Properties" path="/" />

      <h1 className=" text-2xl font-bold text-primary"> {property.name} </h1>

      <div className=" grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="col-span-2">
          <Carousel autoplay>
            {property.images.map((image) => (
              <div key={image}>
                <img
                  src={image}
                  alt={image}
                  className=" w-full h-96 lg:h-[450px] object-cover rounded-md"
                />
              </div>
            ))}
          </Carousel>

          <p className=" text-sm text-gray-500 mt-7">{property.description}</p>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default PropertyPage;
