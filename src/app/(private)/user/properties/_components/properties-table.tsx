import prisma from "@/config/db";
import React from "react";
import ClientSidePropertiesTable from "./properties-table-clientside";
import { GetCurrentUserFromMongoDB } from "@/actions/user";

async function PropertiesTable() {
  const user = await GetCurrentUserFromMongoDB();

  const properties = await prisma.property.findMany({
    orderBy: {
      updatedAt: "desc",
    },
    where: {
      userId: user?.data?.id,
    },
  });

  return (
    <div>
      <ClientSidePropertiesTable properties={properties} />
    </div>
  );
}

export default PropertiesTable;
