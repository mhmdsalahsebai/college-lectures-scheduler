import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";

export async function POST(request) {
    const jsonData = await request.json();
    const queryParams = new URLSearchParams(request.url);
    const firstKey = queryParams.keys().next().value;
    const id = queryParams.get(firstKey);

    const filePath = path.join(process.cwd(), "data/tables", id + "_data.json");

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

export async function GET(request) {
    const queryParams = new URLSearchParams(request.url);
    const firstKey = queryParams.keys().next().value;
    const id = queryParams.get(firstKey);
    const filePath = path.join(process.cwd(), "data/tables", id + "_data.json");
    try {
        if (!fs.existsSync(path.join(process.cwd(), "data/tables"))) {
            fs.mkdirSync(path.join(process.cwd(), "data/tables"));
        }
        if (!fs.existsSync(filePath)) {
            return NextResponse.json(
                { success: true, data: [] },
                { status: 200, headers: { "content-type": "application/json" } }
            );
        }
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