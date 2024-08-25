import { NextResponse } from "next/server";

const fileSystem = require("fs/promises");
const path = require("path");

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "data", "Zaynab.pdf");

    const fileHanlder = await fileSystem.open(filePath, "r");

    const headers = new Headers({
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="Zaynab.pdf"',
    });

    return new NextResponse(await fileHanlder.createReadStream(), { headers });
  } catch (error) {
    return new NextResponse("Error downloading the file", { status: 500 });
  }
}
