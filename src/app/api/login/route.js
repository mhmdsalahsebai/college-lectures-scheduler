import { SignJWT } from "jose";
import { NextResponse } from "next/server";
import { getJwtSecretKey } from "../../../../libs/auth";
import { timingSafeEqual } from "crypto";

export async function POST(request) {
  const body = await request.json();
  const username = body.username;
  const password = body.password;

  try {
    const isValidUsername =
      username.length === process.env.NAME.length &&
      timingSafeEqual(
        Buffer.from(username, "base64"),
        Buffer.from(process.env.NAME, "base64")
      );

    const isValidPassword =
      password.length === process.env.PASSWORD.length &&
      timingSafeEqual(
        Buffer.from(password, "base64"),
        Buffer.from(process.env.PASSWORD, "base64")
      );

    if (isValidUsername && isValidPassword) {
      const token = await new SignJWT({
        username: username,
      })
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("86400s") // one day (3600s * 24 = 86400s)
        .sign(getJwtSecretKey());
      const response = NextResponse.json(
        { success: true },
        { status: 200, headers: { "content-type": "application/json" } }
      );
      response.cookies.set({
        name: "token",
        value: token,
        path: "/",
        secure: true,
        httpOnly: true,
        sameSite: "strict",
      });
      return response;
    } else {
      return NextResponse.json(
        {
          success: false,
          password: process.env.PASSWORD,
          username: process.env.NAME,
        },
        { status: 401 }
      );
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
