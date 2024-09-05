import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch("https://api.coincap.io/v2/assets/bitcoin").then((res) =>
      res.json()
    );

    // const res = Math.floor(Math.random() * 100);
    return NextResponse.json(res);
  } catch (error) {
    console.log(error);
    return;
  }
}
