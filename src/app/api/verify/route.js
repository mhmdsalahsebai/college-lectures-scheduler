import { NextResponse } from "next/server";
import { verifyJwtToken } from "../../../../libs/auth";
import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = cookies();
  const token = cookieStore.get("token");

  try {
    const payload = verifyJwtToken(token);

    if (payload) {
      return NextResponse.json({ isAuthorized: true }, { status: 200 });
    } else {
      return NextResponse.json(
        {
          isAuthorized: false,
          payload,
        },
        { status: 401 }
      );
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ isAuthorized: false }, { status: 500 });
  }
}
