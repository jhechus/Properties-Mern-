"use server";
import prisma from "@/config/db";
import { currentUser } from "@clerk/nextjs";

export const GetCurrentUserFromMongoDB = async () => {
  try {
    // check if user is already exists with clark userid property
    const clerkUser = await currentUser();
    let mongoUser = null;
    // If the user exists, return their information
    mongoUser = await prisma.user.findUnique({
      where: {
        clerkuserId: clerkUser?.id,
      },
    });

    if (mongoUser) {
      return {
        data: mongoUser,
      };
    }

    // if user dosent exists, create new user
    let username = clerkUser?.username;

    // If the user doesn't have a username, create one using their first and last name
    if (!username) {
      username = clerkUser?.firstName + " " + clerkUser?.lastName;
    }

    const newUser: any = {
      clerkuserId: clerkUser?.id,
      username,
      email: clerkUser?.emailAddresses[0].emailAddress,
      profilePic: clerkUser?.imageUrl,
    };
    const result = await prisma.user.create({
      data: newUser,
    });

    // Return the newly created user
    return {
      data: result,
    };
  } catch (error: any) {
    console.log(error);

    // If there is an error, return the error message
    return {
      error: error.message,
    };
  }
};
