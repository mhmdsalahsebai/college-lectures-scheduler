import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";

export async function POST(request) {
    const jsonData = await request.json();
    const { name } = jsonData;
    const filePath = path.join(process.cwd(), "data/professors", name + ".json");
    try {
        if (!fs.existsSync(path.join(process.cwd(), "data/professors"))) {
            fs.mkdirSync(path.join(process.cwd(), "data/professors"));
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
    const filePath = path.join(process.cwd(), "data/professors");
    if (!fs.existsSync(filePath)) {
        return NextResponse.json(
            { success: true, data: [] },
            { status: 200, headers: { "content-type": "application/json" } }
        );
    }
    const fileNames = fs.readdirSync(filePath);
    const data = fileNames.map((fileName) => {
        const fileContent = fs.readFileSync(path.join(filePath, fileName), "utf8");
        return JSON.parse(fileContent);
    });
    return NextResponse.json(
        { data },
        { status: 200, headers: { "content-type": "application/json" } }
    );
}
export async function DELETE(request) {
    const { name } = await request.json();
    const filePath = path.join(process.cwd(), "data/professors", name + ".json");
    try {
        fs.unlinkSync(filePath);
        const fileNames = fs.readdirSync(path.join(process.cwd(), "data/professors"));
        const data = fileNames.map((fileName) => {
            const fileContent = fs.readFileSync(path.join(filePath, fileName), "utf8");
            return JSON.parse(fileContent);
        });
        return NextResponse.json(
            { data },
            { status: 200, headers: { "content-type": "application/json" } }
        );
    }
    catch (error) {
        console.log(error);
        return NextResponse.json({ success: false }, { status: 500 });
    }
}