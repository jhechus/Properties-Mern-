import { GetCurrentUserFromMongoDB } from "@/actions/user";
import PageTitle from "@/components/page-title";
import prisma from "@/config/db";
import { currentUser } from "@clerk/nextjs";
import dayjs from "dayjs";
import React from "react";

async function Account() {
  const clerkUser = await currentUser();
  const mongoUser = (await GetCurrentUserFromMongoDB()).data;
  const propertiesCount = await prisma.property.count({
    where: { userId: mongoUser?.id },
  });

  const userSubscription: any = await prisma.subscription.findFirst({
    where: { userId: mongoUser?.id },
    orderBy: { createdAt: "desc" },
  });

  console.log(userSubscription);

  const getSectionTitle = (title: string) => {
    return (
      <div>
        <h1 className=" text-xl font-bold text-gray-500"> {title}</h1>
        <hr className=" border-gray-300 my-2 border-solid" />
      </div>
    );
  };

  const getAttribute = (title: string, value: string) => {
    return (
      <div className="flex flex-col text-sm">
        <span className=" text-gray-900 font-semibold"> {title} </span>
        <span className=" text-gray-700"> {value} </span>
      </div>
    );
  };

  return (
    <div>
      <PageTitle title="My Account" />

      <div className=" flex flex-col gap-5">
        {getSectionTitle("Basic details")}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {getAttribute("Name", mongoUser?.username || "")}
          {getAttribute("Email", mongoUser?.email || "")}
          {getAttribute("Clerk User id", mongoUser?.clerkuserId || "")}
          {getAttribute(
            "Registered On",
            dayjs(mongoUser?.createdAt).format("DD MM YYYY hh:mm A") || ""
          )}
          {getAttribute(
            "Last Login",
            dayjs(clerkUser?.lastSignInAt).format("DD MM YYYY hh:mm A") || ""
          )}
          {getAttribute("properties Posted", propertiesCount.toString())}
        </div>
      </div>

      <div className=" flex flex-col gap-5 mt-10">
        {getSectionTitle("Subscription Details")}

        {userSubscription ? (
          <div className="grid grid-cols-3 gap-5">
            {getAttribute("Plan", userSubscription?.plan.name || "")}
            {getAttribute("precio", `$ ${userSubscription?.plan.price}` || "")}
            {getAttribute(
              "purchased On",
              dayjs(userSubscription?.createdAt).format(
                "DD MMMM YYYY HH:mm A"
              ) || ""
            )}
            {getAttribute("Payment Id", userSubscription?.paymentId || "")}
          </div>
        ) : (
          <div> Ninguna subscripcion encontrada </div>
        )}
      </div>
    </div>
  );
}

export default Account;
