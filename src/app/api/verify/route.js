import { NextResponse } from "next/server";
import { verifyJwtToken } from "../../../../libs/auth";
import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = cookies();
  const token = cookieStore.get("token");
  try {
    const payload = await verifyJwtToken(token.value);

    if (payload) {
      return NextResponse.json({ isAuthorized: true }, { status: 200 });
    } else {
      return NextResponse.json(
        {
          isAuthorized: false,
        },
        { status: 401 }
      );
    }
  } catch (error) {
    return NextResponse.json({ isAuthorized: false }, { status: 500 });
  }
}
