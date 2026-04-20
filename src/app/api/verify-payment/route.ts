// app/api/verify-payment/route.ts

// HOW TO USE:
// In Give.tsx, inside onSuccess, uncomment the fetch() call and point
// it to /api/verify-payment.

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { reference } = await req.json();

    if (!reference) {
      return NextResponse.json(
        { error: "No reference provided" },
        { status: 400 },
      );
    }

    // Call Paystack's verification endpoint with SECRET key
    const response = await fetch(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
          "Content-Type": "application/json",
        },
      },
    );

    const data = await response.json();

    if (data.status && data.data.status === "success") {
      // Payment is confirmed genuine.
      // Here you could also:
      // - Save the donation record to a database
      // - Send a thank-you email via Resend or Nodemailer
      // - Log the donor's name, amount, and purpose for your records
      return NextResponse.json({
        verified: true,
        amount: data.data.amount / 100, // convert kobo back to dollars
        email: data.data.customer.email,
        reference: data.data.reference,
      });
    } else {
      return NextResponse.json(
        { verified: false, error: "Payment not successful" },
        { status: 400 },
      );
    }
  } catch (err) {
    return NextResponse.json({ error: "Verification failed" }, { status: 500 });
  }
}
