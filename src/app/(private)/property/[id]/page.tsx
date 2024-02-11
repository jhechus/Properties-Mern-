import LinkButton from "@/components/link-button";
import prisma from "@/config/db";
import { Property } from "@prisma/client";
import React from "react";

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
    </div>
  );
}

export default PropertyPage;
