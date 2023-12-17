import { jwtVerify } from "jose";

export function getJwtSecretKey() {
  const secret = process.env.JWT_SECRET_KEY;
  if (!secret) {
    throw new Error("JWT Secret key is not matched");
  }
  return new TextEncoder().encode(secret);
}

export async function verifyJwtToken(token) {
  try {
    const { payload } = await jwtVerify(token, getJwtSecretKey());
    console.log("payload", payload);
    return payload;
  } catch (error) {
    console.log(error);
    return undefined;
  }
}
