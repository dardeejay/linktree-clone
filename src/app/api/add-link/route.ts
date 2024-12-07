import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();
export async function POST(req: NextRequest): Promise<NextResponse> {
  const data = await req.json();

  const { title, url, userId } = data;

  try {
    const link = await prisma.link.create({
      data: {
        title: title,
        url: url,
        userId: userId.toString(),
      },
    });

    if (!link) {
      return NextResponse.json(
        {
          message: "Creating link failed",
        },
        {
          status: 500,
        }
      );
    }
    return NextResponse.json({
        message: "Link created successfully"
    }, {
        status: 201
    })
  } catch (e) {
    return NextResponse.json(
      {
        message: "Creating link failed",
      },
      {
        status: 500,
      }
    );
  }
}
