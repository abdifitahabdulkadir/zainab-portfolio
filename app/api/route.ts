import { NextResponse } from "next/server";
const fileSystem = require("fs/promises");
const path = require("path");

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "public", "zaynab.pdf");

    const fileHanlder = await fileSystem.open(filePath, "r");

    const headers = new Headers({
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="zaynab.pdf"',
    });

    return new NextResponse(await fileHanlder.createReadStream(), { headers });
  } catch (error) {
    console.log(error);
    return new NextResponse("Error downloading the file", { status: 500 });
  }
}
