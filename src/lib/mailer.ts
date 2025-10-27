"use server";

import nodemailer, { TransportOptions } from "nodemailer";

interface MailOptions {
  address: string;
  subject: string;
  text: string;
  html: string;
}

interface CreateMailSystemParams {
  user: UserType;
  mailTo: "user" | "client";
}

type UserType = {
  firstName: string;
  lastName: string;
  mailAddress: string;
  phone: string;
};

// Create the transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USER || "example@mail.com",
    pass: process.env.MAIL_PASS || "pass@123",
  },
  secure: false,
  port: 465,
  timeout: 60000,
  tls: {
    rejectUnauthorized: false,
  },
} as TransportOptions);

// Core mail function
async function mail({
  address,
  subject,
  text,
  html,
}: MailOptions): Promise<void> {
  try {
    const info = await transporter.sendMail({
      from: `Rinku Kumar 👻 <${process.env.MAIL_USER || "example@mail.com"}>`,
      to: address,
      subject,
      text,
      html,
    });
    console.log("✅ Message sent:", info.messageId);
  } catch (error) {
    console.error("❌ Error sending mail:", error);
  }
}

// Create mail system for user
export const createMailSystem = async ({
  user,
  mailTo,
}: CreateMailSystemParams): Promise<void> => {
  if (mailTo === "client") {
    const html = `<div><h3>Thank you ${user.firstName} ${user.lastName}</h3><p>We will get back to you soon.</p></div>`;
    const text = `Thank you ${user.firstName} ${user.lastName} for contacting us. We will get back to you soon.`;
    const subject = "Thank you for contacting us";
    return await mail({ address: user.mailAddress, subject, text, html });
  } else if (mailTo === "user") {
    const html = `<div><h3>New Contact Request</h3><p>Name: ${user.firstName} ${user.lastName}</p><p>Email: ${user.mailAddress}</p><p>Phone: ${user.phone}</p></div>`;
    const text = `New Contact Request\nName: ${user.firstName} ${user.lastName}\nEmail: ${user.mailAddress}\nPhone: ${user.phone}`;
    const subject = "New Contact Request Received";
    const adminEmail = process.env.ADMIN_EMAIL || "admin@example.com";
    return await mail({ address: adminEmail, subject, text, html });
  }
};
