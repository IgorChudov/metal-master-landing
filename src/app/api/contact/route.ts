import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { isValidRussianPhone } from "@/lib/validation";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, message, consent, _gotcha } = body;

    // Honeypot check
    if (_gotcha) {
      // Silently ignore bot submissions
      return NextResponse.json({ success: true });
    }

    // Consent check
    if (!consent) {
      return NextResponse.json(
        { error: "Необходимо согласие на обработку данных" },
        { status: 400 }
      );
    }

    // Validate name
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { error: "Имя обязательно" },
        { status: 400 }
      );
    }

    // Validate phone
    if (!phone || typeof phone !== "string" || !isValidRussianPhone(phone)) {
      return NextResponse.json(
        { error: "Некорректный номер телефона" },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.RESEND_TO_EMAIL;

    if (!resendApiKey || !toEmail) {
      console.error("Missing RESEND_API_KEY or RESEND_TO_EMAIL");
      return NextResponse.json(
        { error: "Ошибка сервера" },
        { status: 500 }
      );
    }

    const resend = new Resend(resendApiKey);

    const { error } = await resend.emails.send({
      from: "МеталлоМастер <onboarding@resend.dev>",
      to: [toEmail],
      subject: `Новая заявка от ${name}`,
      text: `
Имя: ${name}
Телефон: ${phone}
Сообщение: ${message || "Не указано"}
      `,
    });

    if (error) {
      console.error("Resend sending error:", error);
      return NextResponse.json(
        { error: "Ошибка при отправке письма" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Внутренняя ошибка сервера" },
      { status: 500 }
    );
  }
}