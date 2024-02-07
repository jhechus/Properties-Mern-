"use client";

import { GetCurrentUserFromMongoDB } from "@/actions/user";
import { UserButton } from "@clerk/nextjs";
import { User } from "@prisma/client";
import { Button, Dropdown, message } from "antd";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import Loader from "@/components/loader";
import { useRouter } from "next/navigation";
import { Router } from "next/router";

// Define the user and admin menus
const userMenu = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Properties",
    path: "/user/properties",
  },
  {
    name: "Account",
    path: `/user/account`,
  },
  {
    name: "Subscriptions",
    path: `/user/subscription`,
  },
];

const adminMenu = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Properties",
    path: "/admin/properties",
  },
  {
    name: "Users",
    path: "/admin/users",
  },
];

// Define the LayoutProvider component
function LayoutProvider({ children }: { children: React.ReactNode }) {
  // Initialize the router object
  const router = useRouter();

  // Initialize the state variables for the menu and authentication status
  const [menuToShow = userMenu, setMenuToShow] = React.useState<any>(userMenu);
  const [currentUserData = null, setCurrentUserData] =
    React.useState<User | null>(null);
  const [loading = false, setLoading] = React.useState<boolean>(false);

  // Get the current pathname
  const pathname = usePathname();
  // Determine if the current route is a public route
  const isPublicRoute = ["sign-in", "sign-up"].includes(pathname.split("/")[1]);

  // Define the getHeader function
  const getHeader = () => {
    if (isPublicRoute) return null;
    return (
      <div className=" lg:px-20 px-5">
        <div className=" bg-primary p-3 flex justify-between items-center rounded-b ">
          <h1
            className="text-2xl text-white font-bold cursor-pointer"
            onClick={() => {
              router.push("/");
            }}
          >
            Properties
          </h1>

          <div className=" bg-white py-2 px-5 rounded-sm flex items-center gap-5">
            <Dropdown
              menu={{
                items: menuToShow.map((item: any) => ({
                  label: item.name,
                  onClick: () => {
                    router.push(item.path);
                  },
                })),
              }}
            >
              <Button className=" text-primary hover:text-primary" type="link">
                {currentUserData?.username}
              </Button>
            </Dropdown>
            <UserButton afterSignOutUrl="/sign-in" />
          </div>
        </div>
      </div>
    );
  };

  // Define the getContent function
  const getContent = () => {
    if (isPublicRoute) return children;
    if (loading) return <Loader />;
    return <div className=" py-5 lg:px-20 px-5"> {children}</div>;
  };

  // Define the getCurrentuser function
  const getCurrentuser = async () => {
    try {
      setLoading(true);
      const response: any = await GetCurrentUserFromMongoDB();
      if (response.error) throw new Error(response.error.message);
      setCurrentUserData(response.data);
      if (response.data.isAdmin) {
        setMenuToShow(adminMenu);
      }
    } catch (error: any) {
      message.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Call the getCurrentuser function when the component mounts
  useEffect(() => {
    if (!isPublicRoute) getCurrentuser();
  }, []);

  // Render the header and content components
  return (
    <div>
      {getHeader()}
      {getContent()}
    </div>
  );
}

export default LayoutProvider;
