"use server";

import { currentUser } from "@clerk/nextjs/server";
import { onAuthenticateUser } from "./user";
import prisma from "@/lib/prisma";

export default async function getAllProjects() {

    const user = await onAuthenticateUser();

    if(200 !== user?.status || !user) {
        return { status: user?.status, data: null };
    }

    try {
        const allProjects = await prisma.projects.findMany({
            where: {
                userId: user.user?.id,
                isDeleted: false
            },
            orderBy:{
                createdAt: "desc"
            }
        })

        if(allProjects.length === 0 ){
            return {status: 404, error: "No projects found"}
        }
        return { status: 200, data : allProjects}
        
    } catch (error) {
        console.log("Error fetching projects", error);
        return { status: 500 };
        
    }

}