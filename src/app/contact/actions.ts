"use server";

import { Resend } from "resend";

// Initialize Resend with env key
// We fall back safely if no key is provided to prevent build-time failures
const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

interface SubmitResult {
  success: boolean;
  message: string;
}

export async function sendContactEmail(formData: {
  name: string;
  email: string;
  phone: string;
  message: string;
}): Promise<SubmitResult> {
  const { name, email, phone, message } = formData;

  // 1. Validation
  if (!name || name.trim().length < 2) {
    return { success: false, message: "Full Name must be at least 2 characters." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return { success: false, message: "Please provide a valid email address." };
  }

  if (!message || message.trim().length < 10) {
    return { success: false, message: "Message must be at least 10 characters." };
  }

  // 2. Safe Guard for missing API key
  if (!resend) {
    console.error("RESEND_API_KEY environment variable is not defined.");
    
    // In local development, we simulate a successful sending if no key is provided,
    // which prevents developer lockouts while setting up accounts!
    if (process.env.NODE_ENV === "development") {
      console.log("Simulating email send in local development mode...");
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return {
        success: true,
        message: "Simulated sending successful (local dev mode - configure RESEND_API_KEY in .env for production).",
      };
    }

    return {
      success: false,
      message: "Email dispatch failed. Mailer is not configured correctly on the server.",
    };
  }

  try {
    // 3. Dispatch Email via Resend
    // Sender: onboarding@resend.dev (default safe sender for free tiers)
    // Recipient: mohammednihal.dev@gmail.com (developer's inbox)
    const emailResult = await resend.emails.send({
      from: "Portfolio Form <onboarding@resend.dev>",
      to: "mohammednihal.dev@gmail.com",
      subject: `Inquiry from ${name.trim()} - Portfolio`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 5px;">
          <h2 style="border-bottom: 1px solid #eaeaea; padding-bottom: 10px; color: #111;">New Portfolio Inquiry</h2>
          <p><strong>Full Name:</strong> ${name.trim()}</p>
          <p><strong>Email Address:</strong> ${email.trim()}</p>
          <p><strong>Phone Number:</strong> ${phone ? phone.trim() : "Not provided"}</p>
          <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
          <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-radius: 5px;">
            <p style="margin-top: 0; font-weight: bold;">Message:</p>
            <p style="white-space: pre-wrap; line-height: 1.6; color: #333;">${message.trim()}</p>
          </div>
        </div>
      `,
    });

    if (emailResult.error) {
      console.error("Resend API Error:", emailResult.error);
      return {
        success: false,
        message: `Email could not be dispatched: ${emailResult.error.message}`,
      };
    }

    return {
      success: true,
      message: "Message sent successfully. I'll get back to you soon.",
    };
  } catch (error: any) {
    console.error("Server Action Exception:", error);
    return {
      success: false,
      message: "An unexpected exception occurred on the mail server.",
    };
  }
}
