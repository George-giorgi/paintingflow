import { NextResponse } from "next/server";
import { connectDB } from "../../lib/db";

export async function GET(req: Request) {
  try {
    // Parse the query string from the request URL
    const { searchParams } = new URL(req.url);
    const search = searchParams.get("search"); // Get the 'search' parameter

    console.log(search);

    if (!search) {
      return NextResponse.json(
        { error: "Missing search parameter" },
        { status: 400 }
      );
    }

    const pool = await connectDB();
    const result = await pool
      .request()
      .input("search", search) // Securely pass parameter
      .query(
        "SELECT Length, Width, Weight, Thickness FROM Item WHERE PartNo = @search"
      ); // select * with partNo

    return NextResponse.json(result.recordset);
  } catch (error: any) {
    return NextResponse.json(
      { error: "Database query failed", details: error.message },
      { status: 500 }
    );
  }
}
