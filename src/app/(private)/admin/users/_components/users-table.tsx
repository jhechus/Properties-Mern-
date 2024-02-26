"use client";

import { User } from "@prisma/client";
import { Table } from "antd";
import dayjs from "dayjs";
import React from "react";

function UsersTable({ users }: { users: User[] }) {
  const columns = [
    {
      title: "profile Pic",
      dataIndex: "profilePic",
      render(profilePic: string) {
        return (
          <img
            src={profilePic}
            alt="Profile Picture"
            width="40"
            className=" rounded-full"
          />
        );
      },
    },
    {
      title: "Name",
      dataIndex: "username",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Registered On",
      dataIndex: "createdAt",
      render(createdAt: string) {
        return dayjs(createdAt).format("MM DD YYYY HH:mm A");
      },
    },
    {
      title: "Status",
      dataIndex: "Status",
      render(status: string, record: User) {
        if (record.isActive) {
          return "Active";
        }
        return "InActive";
      },
    },
    {
      title: "is Admin",
      dataIndex: "Status",
      render(isAdmin: boolean) {
        if (isAdmin) {
          return "Yes";
        }
        return "No";
      },
    },
  ];

  return (
    <div>
      <Table dataSource={users} columns={columns} />
    </div>
  );
}

export default UsersTable;
