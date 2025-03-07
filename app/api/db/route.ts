import { NextResponse } from "next/server";
import { connectDB } from "../../lib/db";

export async function GET(req: Request) {
  try {
    // Parse the query string from the request URL
    const { searchParams } = new URL(req.url);
    const search = searchParams.get("search"); // Get the 'search' parameter
    const rev = searchParams.get("rev"); //get the 'rev' parameter

    if (!search) {
      return NextResponse.json(
        { error: "Missing search parameter" },
        { status: 400 }
      );
    }
    if (!rev) {
      return NextResponse.json(
        { error: "Missing search parameter" },
        { status: 400 }
      );
    }

    const pool = await connectDB();
    const result = await pool
      .request()
      .input("search", search) // Securely pass parameter
      .input("rev", rev) // Securely pass parameter
      .query(
        // "SELECT Length, Width, Weight, Thickness FROM Item WHERE PartNo = @search"
        "SELECT Length, Width, Weight, Thickness FROM Item WHERE PartNo = @search AND Rev = @rev"
      ); // select * with partNo

    return NextResponse.json(result.recordset);
  } catch (error: any) {
    return NextResponse.json(
      { error: "Database query failed", details: error.message },
      { status: 500 }
    );
  }
}
