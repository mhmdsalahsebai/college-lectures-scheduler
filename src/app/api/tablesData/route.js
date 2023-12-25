import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";

export async function POST(request) {
    const jsonData = await request.json();
    const queryParams = new URLSearchParams(request.url);
    const firstKey = queryParams.keys().next().value;
    const id = queryParams.get(firstKey);
    const folderPath = path.join(process.cwd(), "data/tables");
    const filePath = path.join(folderPath, id + "_data.json");

    try {
        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath);
        }
        // read all files in 
        const fileNames = fs.readdirSync(folderPath).filter((fileName) => {
            return fileName.endsWith(id[1] + "_data.json") && !fileName.endsWith(id + "_data.json")
        });
        var duplicate = false;
        fileNames.map((fileName) => {
            const fileContent = JSON.parse(fs.readFileSync(path.join(folderPath, fileName), "utf8"));
            if (fileContent !== null && jsonData !== null)
                for (let i = 0; i < fileContent.length && i < jsonData.length && !duplicate; i++) {
                    if (fileContent[i] !== null && jsonData[i] !== null)
                        for (let j = 0; j < fileContent[i].length && j < jsonData[i].length && !duplicate; j++) {
                            if (fileContent[i][j] && jsonData[i][j] && fileContent[i][j].name === jsonData[i][j].name) {
                                duplicate = true;
                            }
                        }
                }
        });
        if (!duplicate) {
            fs.writeFileSync(filePath, JSON.stringify(jsonData));
            return NextResponse.json(
                { success: true },
                { status: 200, headers: { "content-type": "application/json" } }
            );
        }
        else {
            return NextResponse.json(
                { success: false  , message: "The Instructor is busy at this time"},
                { status: 200, headers: { "content-type": "application/json" } }
            );

        }
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
    if (id === "courses") {
        try {

            const filePath = path.join(process.cwd(), "data");
            const fileNames = fs.readdirSync(filePath).filter((fileName) => {
                return fileName !== "staff.json" && fileName.endsWith(".json");
            });
            const data = fileNames.map((fileName) => {
                const fileContent = fs.readFileSync(path.join(filePath, fileName), "utf8");
                return JSON.parse(fileContent);
            });
            const flattenedData = data.reduce((acc, curr) => {
                return acc.concat(curr);
            }, []);
            return NextResponse.json(
                { success: true, data: flattenedData },
                { status: 200, headers: { "content-type": "application/json" } }
            );
        }
        catch (error) {
            console.log(error);
            return NextResponse.json({ success: false }, { status: 500 });
        }
    }
    else {
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
}