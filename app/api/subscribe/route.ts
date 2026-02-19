import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(req: NextRequest) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const { email } = await req.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email.' }, { status: 400 })
    }

    // 1. Send confirmation to the user
    await resend.emails.send({
      from: 'Nativ <hello@nativ.social>',
      to: email,
      subject: "You're on the Nativ waitlist.",
      html: `
        <div style="font-family: Georgia, serif; max-width: 520px; margin: 0 auto; padding: 40px 24px; color: #1E0F05; background: #F4ECD8;">
          <p style="font-size: 13px; letter-spacing: 0.2em; text-transform: uppercase; color: #B85C2A; margin-bottom: 32px;">nativ.social</p>
          <h1 style="font-size: 28px; font-weight: 300; line-height: 1.3; margin-bottom: 20px;">
            You're on the list.
          </h1>
          <p style="font-size: 15px; line-height: 1.8; color: #5C3D1E; margin-bottom: 16px;">
            We're opening access city by city. You'll hear from us when we're ready for you.
          </p>
          <p style="font-size: 15px; line-height: 1.8; color: #5C3D1E;">
            — The Nativ team
          </p>
          <hr style="border: none; border-top: 1px solid rgba(100,60,20,0.15); margin: 40px 0;" />
          <p style="font-size: 11px; color: #9B7A5C;">
            You signed up at nativ.social. If this wasn't you, ignore this email.
          </p>
        </div>
      `,
    })

    // 2. Notify yourself
    await resend.emails.send({
      from: 'Nativ Waitlist <hello@nativ.social>',
      to: process.env.NOTIFY_EMAIL || 'hello@nativ.social',
      subject: `New waitlist signup: ${email}`,
      html: `<p>New signup: <strong>${email}</strong></p><p>Time: ${new Date().toISOString()}</p>`,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Resend error:', err)
    return NextResponse.json({ error: 'Failed to subscribe.' }, { status: 500 })
  }
}
