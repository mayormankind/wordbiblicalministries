import { NextRequest, NextResponse } from "next/server";
import { submitComment } from "@/lib/strapi";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message, postDocumentId } = body as {
      name?: string;
      email?: string;
      message?: string;
      postDocumentId?: string;
    };

    // Basic validation
    if (!name || !email || !message || !postDocumentId) {
      return NextResponse.json(
        { ok: false, error: "All fields are required." },
        { status: 400 }
      );
    }

    const result = await submitComment({ name, email, message, postDocumentId });

    if (!result.ok) {
      return NextResponse.json(
        { ok: false, error: result.error },
        { status: 422 }
      );
    }

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (err) {
    console.error("[POST /api/comments]", err);
    return NextResponse.json(
      { ok: false, error: "Server error." },
      { status: 500 }
    );
  }
}
