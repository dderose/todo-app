import { ToDo } from "@prisma/client";
import { type NextRequest } from 'next/server'
import prisma from "~/app/utils/db.server";

export const dynamic = 'force-static'

export async function GET() {
  const getTodos: ToDo[] = await prisma.toDo.findMany({
    include: {
      assigned: true
    }
  });

  return Response.json(getTodos);
}

export async function POST(request: NextRequest) {
  const parsedRequest = await request.json();

  const todo = await prisma.toDo.create({
    data: {
      name: parsedRequest.name,
      description: parsedRequest.description,
      due: parsedRequest.due,
      assigned: {
        connect: {
          id: parsedRequest.assigned
        }
      }
    }
  });
  return Response.json(todo);
}

export async function PATCH(request: NextRequest) {
  const parsedRequest = await request.json();

  const todo = await prisma.toDo.update({
    where: {
      id: parsedRequest.id
    },
    data: {
      complete: parsedRequest.complete
    },
    include: {
      assigned: true
    }
  })

  return Response.json(todo);
}