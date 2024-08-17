import { ToDo, User } from "@prisma/client";
import { type NextRequest } from 'next/server'
import prisma from "~/app/utils/db.server";

export const dynamic = 'force-static'
 
export async function GET() {
  const getUsers: User[] = await prisma.user.findMany({});
 
  return Response.json(getUsers);
}

export async function POST(request: NextRequest) {
  const parsedRequest = await request.json();

  const user = await prisma.user.create({
    data: parsedRequest
  });
 
  return Response.json(user);
}