import PageTitle from "@/components/page-title";
import { subscriptionsPlans } from "@/constants";
import { Button } from "antd";
import { features } from "process";
import React from "react";
import BuySubcription from "./_components/buy-subscription";

function Subscription() {
  return (
    <div>
      <PageTitle title="Subscriptions" />

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {subscriptionsPlans.map((plan) => {
          //TODO: implement this
          const isSelected = plan.name === "Basic";

          return (
            <div
              className={`flex flex-col gap-5 justify-between p-5 border border-solid rounded  ${
                isSelected ? "border-primary border-2" : "border-gray-300"
              }`}
            >
              <div className=" flex flex-col gap-3">
                <h1 className=" text-xl font-bold text-primary">{plan.name}</h1>
                <h1 className="text-orange-700 text-2xl lg:text-5xl font-bold">
                  ${plan.price}
                </h1>
                <hr className="border-gray-300 my-2 border-solid" />

                <div className=" flex flex-col gap-1">
                  {plan.features.map((feature) => (
                    <span className=" text-gray-500 text-sm"> {feature} </span>
                  ))}
                </div>
              </div>
              <BuySubcription plan={plan} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Subscription;
