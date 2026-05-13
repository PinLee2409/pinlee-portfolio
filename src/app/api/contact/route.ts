import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, message } = body;

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["yourmail@gmail.com"],
      subject: `Portfolio Contact From ${name}`,
      html: `
        <h2>New Contact</h2>

        <p>Name: ${name}</p>

        <p>Email: ${email}</p>

        <p>${message}</p>
      `,
    });

    return Response.json({
      success: true,
    });
  } catch (error) {
    return Response.json({
      success: false,
    });
  }
}
