import { NextResponse } from "next/server";

export async function POST(request) {
  const response = NextResponse.json({ status: 302});
  response.cookies.set({
    name: "token",
    value: "",
    path: "/",
    expires: new Date(0),
    secure: true,
    httpOnly: true,
    sameSite: "Strict",
  });
  return response;
}
