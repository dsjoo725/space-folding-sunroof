import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, phone, date, address, inquiry } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.TARGET_EMAIL,
      subject: "📩 공간시스템 폴딩&썬루프 - 신규 문의",
      text: `
        📌 담당자명(회사명): ${name}
        📞 연락처: ${phone}
        🗓️ 시공일자: ${date}
        🏠 시공 주소: ${address}
        📝 문의 내용: ${inquiry || "없음"}
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "문의가 생성되었으며, 이메일 전송에 성공했습니다." },
      { status: 201 }
    );
  } catch (error) {
    console.error("문의 생성 실패:", error);
    return NextResponse.json(
      { message: "문의 생성 또는 이메일 전송 실패", error },
      { status: 500 }
    );
  }
}
