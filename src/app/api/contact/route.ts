import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { nombre, apellido, email, codigo, telefono, mensaje } =
      await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: "Nueva consulta desde la web - Santono & Asociados",
      html: `
        <h3>Nueva consulta</h3>
        <p><b>Nombre:</b> ${nombre} ${apellido}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Teléfono:</b> ${codigo} ${telefono}</p>
        <p><b>Mensaje:</b> ${mensaje}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}