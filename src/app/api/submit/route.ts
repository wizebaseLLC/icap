import { NextResponse } from "next/server";
import fs from "fs/promises";
import { PrismaClient } from "@/generated/prisma";

export const runtime = "node";

export async function POST(req: Request) {
  const formData = await req.formData();

  const firstName = formData.get("firstName")?.toString();
  const lastName = formData.get("lastName")?.toString();
  const dateOfBirthStr = formData.get("dateOfBirth")?.toString();
  const phoneNumber = formData.get("phoneNumber")?.toString();
  const streetAddress = formData.get("streetAddress")?.toString();
  const state = formData.get("state")?.toString();
  const zipCodeStr = formData.get("zipCode")?.toString();
  const file = formData.get("file") as File;

  console.log({ firstName, lastName, dateOfBirthStr, file });
  if (
    !firstName ||
    !lastName ||
    !dateOfBirthStr ||
    !phoneNumber ||
    !streetAddress ||
    !state ||
    !zipCodeStr ||
    !file
  ) {
    return NextResponse.json(
      { error: "All fields are required" },
      { status: 400 }
    );
  }

  const buffer = await file.arrayBuffer();
  const saveDir = "public/uploads";
  await fs.mkdir(saveDir, { recursive: true });
  const savePath = `${saveDir}/${Date.now()}_${file.name}`;
  await fs.writeFile(savePath, Buffer.from(buffer));

  const prisma = new PrismaClient();
  await prisma.user.create({
    data: {
      firstName,
      lastName,
      dateOfBirth: new Date(dateOfBirthStr),
      phoneNumber,
      streetAddress,
      state,
      zipCode: parseInt(zipCodeStr, 10),
      filePath: savePath,
    },
  });
  await prisma.$disconnect();

  return NextResponse.json({ success: true });
}
