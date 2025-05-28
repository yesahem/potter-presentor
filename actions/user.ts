"use server";

import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";

export async function onAuthenticateUser() {
  try {
    const user = await currentUser();
    console.log("currentUser from clerk in server component", user);

    if (!user) {
      return { status: 403 };
    }

    const userExistsInDB = await prisma.user.findUnique({
      where: {
        clerkId: user.id,
      },
    });

    if (userExistsInDB) {
      return { status: 200, user: userExistsInDB };
    }

    // If user doesn't exist, create new user
    try {
      const createNewUserInDB = await prisma.user.create({
        data: {
          clerkId: user.id,
          name: user.fullName ?? "",
          email: user.emailAddresses[0].emailAddress,
          profilePicture: user.imageUrl,
        },
      });

      return { status: 200, user: createNewUserInDB };
    } catch (err) {
      console.log("error creating new user in DB", err);
      return { status: 500, err: err };
    }
  } catch (error) {
    console.log("something went wrong in user.ts", error);
    return { status: 500, err: error };
  }
}