"use client";

import { Property } from "@prisma/client";
import { Table } from "antd";
import React from "react";

function ClientSidePropertiesTable({ properties }: { properties: Property }) {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render(price: number) {
        return `$${price}`;
      },
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
  ];

  return (
    <div className=" capitalize">
      <Table dataSource={properties} columns={columns} />
    </div>
  );
}

export default ClientSidePropertiesTable;
