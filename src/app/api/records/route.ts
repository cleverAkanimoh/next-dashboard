import records from "@/records.json";
import { NextResponse } from "next/server";

export const GET = async () => {
  const data = records.data;
  return NextResponse.json({ data });
};
