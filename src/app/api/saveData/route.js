import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";

export async function POST(request) {
    const jsonData = await request.json();
    const filePath = path.join(process.cwd(), "data/tables",  "data.json");

    try {
        if (!fs.existsSync(path.join(process.cwd(), "data/tables"))) {
            fs.mkdirSync(path.join(process.cwd(), "data/tables"));
        }
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
export async function GET() {
    const filePath = path.join(process.cwd(), "data/tables", "data.json");
    try {
        const data = fs.readFileSync(filePath);
        return NextResponse.json(
            { success: true, data: JSON.parse(data) },
            { status: 200, headers: { "content-type": "application/json" } }
        );
    }
    catch (error) {
        console.log(error);
        return NextResponse.json({ success: false }, { status: 500 });
    }
}