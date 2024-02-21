"use server";

import prisma from "@/config/db";
import { GetCurrentUserFromMongoDB } from "./user";

export const SaveSubscription = async ({
  paymentId,
  plan,
}: {
  paymentId: String;
  plan: any;
}) => {
  try {
    const user = await GetCurrentUserFromMongoDB();
    const payload: any = {
      paymentId,
      plan,
      userId: user.data?.id,
    };
    await prisma.subscription.create({
      data: payload,
    });
    return {
      message: "Subscripcion guardada exitosamente",
    };
  } catch (error: any) {
    return {
      error: error.message,
    };
  }
};
