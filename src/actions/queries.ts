"use server";

import prisma from "@/config/db";
import { GetCurrentUserFromMongoDB } from "./user";

export const AddQuery = async (query: any) => {
  try {
    const user = await GetCurrentUserFromMongoDB();
    query.userId = user?.data?.id;
    await prisma.query.create({
      data: query,
    });
    return {
      success: true,
      message: "Successfully added the query.",
    };
  } catch (error: any) {
    return {
      error: error.message,
    };
  }
};
