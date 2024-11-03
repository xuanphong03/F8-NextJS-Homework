import mindmapApi from "@/app/service/mindmapApi";
import { NextResponse } from "next/server";

export async function GET(request) {
  const id = request.nextUrl.searchParams.get("id");
  const data = await mindmapApi.getDetail(id);
  if (!data) {
    return NextResponse.json({ status: "error" });
  }
  return NextResponse.json({ status: "success", data });
}
