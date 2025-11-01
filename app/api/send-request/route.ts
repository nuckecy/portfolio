import { NextRequest, NextResponse } from 'next/server'

interface RequestBody {
  name: string
  email: string
  message: string
  isRecruiter: boolean
  caseStudySlug: string
}

export async function POST(request: NextRequest) {
  try {
    const body: RequestBody = await request.json()

    // Validate required fields
    if (!body.name || !body.email || !body.message || body.isRecruiter === undefined || !body.caseStudySlug) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate message length
    if (body.message.length > 160) {
      return NextResponse.json(
        { error: 'Message must be 160 characters or less' },
        { status: 400 }
      )
    }

    const apiKey = process.env.MAILCHIMP_API_KEY

    if (!apiKey) {
      console.error('MAILCHIMP_API_KEY is not set')
      return NextResponse.json(
        { error: 'Email service is not configured' },
        { status: 500 }
      )
    }

    // Email to user (acknowledgment)
    const userEmailContent = {
      html: `
        <h2>Access Request Received</h2>
        <p>Hi ${body.name},</p>
        <p>Thank you for requesting access to the <strong>${body.caseStudySlug}</strong> case study!</p>
        <p>Your message: <em>"${body.message}"</em></p>
        <p>I usually reply within a few hours. Keep an eye on your inbox!</p>
        <p>Best regards,<br/>Otobong</p>
      `,
      text: `Access Request Received\n\nHi ${body.name},\n\nThank you for requesting access to the ${body.caseStudySlug} case study!\n\nYour message: "${body.message}"\n\nI usually reply within a few hours. Keep an eye on your inbox!\n\nBest regards,\nOtobong`,
    }

    // Email to Otobong (notification)
    const ownerEmailContent = {
      html: `
        <h2>New Portfolio Access Request</h2>
        <p><strong>Case Study:</strong> ${body.caseStudySlug}</p>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Is Recruiter:</strong> ${body.isRecruiter ? 'Yes' : 'No'}</p>
        <p><strong>Message:</strong></p>
        <p><em>"${body.message}"</em></p>
        <p>---</p>
        <p>Reply to: ${body.email}</p>
      `,
      text: `New Portfolio Access Request\n\nCase Study: ${body.caseStudySlug}\nName: ${body.name}\nEmail: ${body.email}\nIs Recruiter: ${body.isRecruiter ? 'Yes' : 'No'}\n\nMessage:\n"${body.message}"\n\n---\nReply to: ${body.email}`,
    }

    // Send email to user
    const userEmailResponse = await fetch('https://mandrillapp.com/api/1.0/messages/send.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        key: apiKey,
        message: {
          html: userEmailContent.html,
          text: userEmailContent.text,
          subject: `Access Request Received - ${body.caseStudySlug}`,
          from_email: 'me@otobong.com',
          from_name: 'Otobong',
          to: [
            {
              email: body.email,
              name: body.name,
              type: 'to',
            },
          ],
          important: false,
          track_opens: true,
          track_clicks: true,
          auto_text: true,
          headers: {
            'Reply-To': 'me@otobong.com',
          },
        },
      }),
    })

    const userEmailResult = await userEmailResponse.json()

    console.log('User email response:', {
      ok: userEmailResponse.ok,
      status: userEmailResponse.status,
      result: userEmailResult
    })

    if (!userEmailResponse.ok || userEmailResult.status === 'error') {
      console.error('Failed to send user email:', userEmailResult)
      return NextResponse.json(
        { error: 'Failed to send confirmation email' },
        { status: 500 }
      )
    }

    // Send email to Otobong
    const ownerEmailResponse = await fetch('https://mandrillapp.com/api/1.0/messages/send.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        key: apiKey,
        message: {
          html: ownerEmailContent.html,
          text: ownerEmailContent.text,
          subject: `New Access Request: ${body.caseStudySlug}`,
          from_email: 'me@otobong.com',
          from_name: 'Portfolio System',
          to: [
            {
              email: 'me@otobong.com',
              name: 'Otobong',
              type: 'to',
            },
          ],
          important: false,
          track_opens: true,
          track_clicks: true,
          auto_text: true,
        },
      }),
    })

    const ownerEmailResult = await ownerEmailResponse.json()

    console.log('Owner email response:', {
      ok: ownerEmailResponse.ok,
      status: ownerEmailResponse.status,
      result: ownerEmailResult
    })

    if (!ownerEmailResponse.ok || ownerEmailResult.status === 'error') {
      console.error('Failed to send owner email:', ownerEmailResult)
      // Still return success to user since their email was sent
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Request sent successfully',
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    )
  }
}
