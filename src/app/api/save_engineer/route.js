import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";

export async function POST(request) {
    const jsonData = await request.json();
    const { engineerName } = jsonData;
    const filePath = path.join(process.cwd(), "data/engineer", engineerName +".json");

    try {   
        console.log(filePath)
        console.log(jsonData)
        fs.writeFileSync(filePath, JSON.stringify(jsonData));
        return NextResponse.json(
            { success: true },
            { status: 200, headers: { "content-type": "application/json" } }
        );
    }
    catch (error) {
        console.log(error);
        return NextResponse.json({ success: false }, { status: 500 });
    }
}
