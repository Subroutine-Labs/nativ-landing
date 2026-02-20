import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(req: NextRequest) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const { email } = await req.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email.' }, { status: 400 })
    }

    // 0. Save contact to Resend audience
    if (process.env.RESEND_AUDIENCE_ID) {
      await resend.contacts.create({
        email,
        audienceId: process.env.RESEND_AUDIENCE_ID,
      })
    }

    // 1. Send confirmation to the user
    await resend.emails.send({
      from: 'Nativ <admin@subroutinelabs.com>',
      to: email,
      subject: "You're on the Nativ waitlist.",
      html: `
        <div style="font-family: Georgia, serif; max-width: 520px; margin: 0 auto; padding: 40px 24px; color: #0C1E24; background: #E8F0F2;">
          <p style="font-size: 13px; letter-spacing: 0.2em; text-transform: uppercase; color: #0C7E84; margin-bottom: 32px;">nativ.social</p>
          <h1 style="font-size: 28px; font-weight: 300; line-height: 1.3; margin-bottom: 20px;">
            You're on the list.
          </h1>
          <p style="font-size: 15px; line-height: 1.8; color: #2A5560;">
            Thanks for joining the waitlist. We'll be in touch.
          </p>
          <hr style="border: none; border-top: 1px solid rgba(8,70,82,0.13); margin: 40px 0;" />
          <p style="font-size: 11px; color: #6A969E;">
            A <a href="https://www.subroutinelabs.com" style="color: #0C7E84; text-decoration: none;">SubroutineLabs</a> product
          </p>
        </div>
      `,
    })

    // 2. Notify yourself
    await resend.emails.send({
      from: 'Nativ Waitlist <admin@subroutinelabs.com>',
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
