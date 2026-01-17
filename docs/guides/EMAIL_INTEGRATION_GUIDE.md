# Email Integration Guide - Mandrill API

**Version**: 1.0.0
**Date**: November 1, 2025
**Service**: MailChimp Mandrill (Transactional Email)
**Status**: ✅ Complete & Production Ready

---

## 📋 Overview

This guide covers the integration of **Mandrill** (MailChimp's transactional email service) for sending automated emails when users request access to password-protected case studies.

### Use Cases
- 📧 **User Acknowledgment**: Confirms receipt of access request
- 📬 **Owner Notification**: Alerts you to new access requests
- ✅ **Delivery Tracking**: Opens and clicks tracking enabled
- 🔐 **Secure**: API key stored in environment variables

---

## 🚀 Quick Start

### 1. Get Mandrill API Key

1. Sign in to [MailChimp](https://mailchimp.com)
2. Navigate to: **Settings** → **Integrations** → **Mandrill**
3. Click **"Add New API Key"**
4. Copy the generated API key

### 2. Add Environment Variable

Create `.env.local` in project root:

```env
MAILCHIMP_API_KEY=your_api_key_here
```

**Never commit this file** - it's in `.gitignore`

### 3. Test Email Sending

Try requesting access on a password-protected case study:
- Visit: `http://localhost:3001/case-study/zalando-contextual`
- Click "Request Password"
- Fill form and submit
- Check your email inbox for confirmation

---

## 🔧 API Endpoint

### Location
`/app/api/send-request/route.ts`

### Request Method
`POST /api/send-request`

### Request Body

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "I'm interested in viewing this case study for research purposes.",
  "isRecruiter": true,
  "caseStudySlug": "zalando-chatbot"
}
```

### Request Validation

| Field | Type | Required | Constraints |
|---|---|---|---|
| `name` | string | ✅ | Non-empty |
| `email` | string | ✅ | Valid email format |
| `message` | string | ✅ | 1-160 characters |
| `isRecruiter` | boolean | ✅ | Must be `true` |
| `caseStudySlug` | string | ✅ | Non-empty |

### Response Success (200)

```json
{
  "success": true,
  "message": "Access request sent successfully"
}
```

### Response Error (400/500)

```json
{
  "error": "Please fill in all fields",
  "code": "VALIDATION_ERROR"
}
```

---

## 📧 Email Structure

### Email 1: User Acknowledgment

**Recipient**: User's email (from form)

**Subject**: `Access Request Received`

**Content**:
```
Dear [Name],

Thank you for your interest in accessing this case study. We've received your request and will review it shortly.

Case Study: [Case Study Title]
Your Email: [Email Address]

You can expect a response within a few hours.

Best regards,
Otobong
```

**Features**:
- Personalized with user's name
- References case study
- Sets expectations for response time
- Professional formatting

### Email 2: Owner Notification

**Recipient**: `me@otobong.com` (configured in API route)

**Subject**: `New Access Request - [Case Study Name]`

**Content**:
```
New Password Access Request

Name: John Doe
Email: john@example.com
Is Recruiter: Yes
Case Study: zalando-chatbot
Message: I'm interested in viewing this case study...

Time: [ISO timestamp]
```

**Features**:
- Full request details
- Timestamp for tracking
- Easy to action

---

## 🔑 Configuration

### Mandrill Email Settings

**From Email**: `me@otobong.com`
**From Name**: `Otobong`

**Why a custom domain?**
- Gmail addresses are often rejected as "unsigned"
- Custom domain allows authentication
- More professional appearance

### Domain Authentication

To authenticate `me@otobong.com`:

1. In MailChimp, go to **Transactional** → **Sending Domains**
2. Click **"Add a Sending Domain"**
3. Enter: `otobong.com`
4. Add DNS records (varies by host)
5. Verify domain ownership

---

## 🎯 Implementation Details

### API Route Handler

```typescript
// /app/api/send-request/route.ts
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { name, email, message, isRecruiter, caseStudySlug } =
      await request.json()

    // 1. Validation
    if (!name || !email || !message || isRecruiter === null || !caseStudySlug) {
      return NextResponse.json(
        { error: "Please fill in all fields" },
        { status: 400 }
      )
    }

    // 2. Message length check
    if (message.length > 160) {
      return NextResponse.json(
        { error: "Message must be 160 characters or less" },
        { status: 400 }
      )
    }

    // 3. Recruiter validation
    if (!isRecruiter) {
      return NextResponse.json(
        { error: "Only recruiters can request access" },
        { status: 400 }
      )
    }

    // 4. Get API key
    const apiKey = process.env.MAILCHIMP_API_KEY
    if (!apiKey) {
      return NextResponse.json(
        { error: "Email service is not configured" },
        { status: 500 }
      )
    }

    // 5. Send emails via Mandrill
    // ... (see full implementation below)

    return NextResponse.json(
      { success: true, message: "Access request sent successfully" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error sending request:", error)
    return NextResponse.json(
      { error: "An error occurred. Please try again." },
      { status: 500 }
    )
  }
}
```

### Mandrill API Call

```typescript
// Send user acknowledgment email
await fetch("https://mandrillapp.com/api/1.0/messages/send.json", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    key: apiKey,
    message: {
      html: userEmailHtml,
      text: userEmailText,
      subject: "Access Request Received",
      from_email: "me@otobong.com",
      from_name: "Otobong",
      to: [{ email: email, type: "to" }],
      track_opens: true,
      track_clicks: true,
      auto_text: true,
    }
  })
})
```

---

## 🔒 Security Best Practices

### 1. API Key Protection

✅ **Do**:
```env
# .env.local (not in git)
MAILCHIMP_API_KEY=md-xxx...
```

✅ **Use server-side routes** (not client-side)

❌ **Don't**:
```typescript
// Never put API key in client code
const sendEmail = async () => {
  await fetch("...", {
    // ❌ API key exposed in browser
    headers: { "Authorization": process.env.MAILCHIMP_API_KEY }
  })
}
```

### 2. Input Validation

✅ **Validate all inputs**:
```typescript
// Name: non-empty string
if (!name || typeof name !== 'string') { ... }

// Email: valid format
if (!email.includes('@')) { ... }

// Message: length limit
if (message.length > 160) { ... }

// Recruiter: boolean
if (typeof isRecruiter !== 'boolean') { ... }
```

### 3. Error Handling

✅ **Don't expose internal details**:
```typescript
// ✅ Safe
return NextResponse.json(
  { error: "Email service is not configured" },
  { status: 500 }
)

// ❌ Unsafe
return NextResponse.json(
  { error: `Mandrill API key missing: ${process.env.MAILCHIMP_API_KEY}` },
  { status: 500 }
)
```

### 4. Rate Limiting

Future enhancement (consider for production):
```typescript
// Could add rate limiting per IP
const ip = request.headers.get('x-forwarded-for')
// Track requests from IP
// Return 429 if exceeds limit
```

---

## 🧪 Testing

### Manual Test

1. **Start dev server**:
   ```bash
   npm run dev
   ```

2. **Open password-protected page**:
   ```
   http://localhost:3001/case-study/zalando-chatbot
   ```

3. **Click "Request Password"**

4. **Fill form**:
   - Name: `Test User`
   - Email: `your-email@example.com`
   - Message: `Testing email integration`
   - Recruiter: `Yes`

5. **Click "Send Request"**

6. **Check email**:
   - You should receive acknowledgment within seconds
   - Check your account email for notification

### API Test (curl)

```bash
curl -X POST http://localhost:3001/api/send-request \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "Testing the API",
    "isRecruiter": true,
    "caseStudySlug": "zalando-chatbot"
  }'
```

### Error Testing

```bash
# Test missing fields
curl -X POST http://localhost:3001/api/send-request \
  -H "Content-Type: application/json" \
  -d '{ "name": "Test" }'
# Expected: 400 - "Please fill in all fields"

# Test long message
curl -X POST http://localhost:3001/api/send-request \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test",
    "email": "test@example.com",
    "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "isRecruiter": true,
    "caseStudySlug": "zalando-chatbot"
  }'
# Expected: 400 - "Message must be 160 characters or less"

# Test non-recruiter
curl -X POST http://localhost:3001/api/send-request \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test",
    "email": "test@example.com",
    "message": "Test message",
    "isRecruiter": false,
    "caseStudySlug": "zalando-chatbot"
  }'
# Expected: 400 - "Only recruiters can request access"
```

---

## 🔄 Delivery Monitoring

### Tracking Features

✅ **Open Tracking**: Detects when email is opened
✅ **Click Tracking**: Detects when links are clicked
✅ **Bounce Handling**: Manages invalid emails

### Viewing Metrics

1. In MailChimp, go to **Transactional** → **Activity**
2. Find your sent email
3. View:
   - Delivery status
   - Open rate
   - Click rate
   - Bounce info

---

## 🐛 Troubleshooting

### Problem: "Email service is not configured"

**Cause**: Missing API key

**Solution**:
1. Check `.env.local` exists in project root
2. Verify key is correct: `MAILCHIMP_API_KEY=xxx`
3. Restart dev server: `npm run dev`
4. Check server logs for key confirmation

### Problem: "Email from address is not authenticated"

**Cause**: `me@otobong.com` not verified

**Solution**:
1. Add sending domain in MailChimp (see Configuration section)
2. Verify DNS records
3. Can take 24-48 hours to fully propagate
4. Fallback to authenticated email in meantime

### Problem: Email goes to spam

**Cause**: Low deliverability score

**Solutions**:
1. Authenticate domain with SPF/DKIM records
2. Use consistent from address
3. Ensure email content is legitimate
4. Add unsubscribe link (if building newsletter)

### Problem: Emails not sending

**Debugging**:
1. Check server logs: `npm run dev` (look for errors)
2. Verify API key in Mandrill dashboard
3. Check network tab in browser (DevTools)
4. Test with curl command (see Testing section)
5. Check Mandrill activity log for failed attempts

---

## 📊 Production Checklist

Before deploying to production:

- [ ] API key configured on hosting provider (environment variables)
- [ ] Never commit `.env.local` to Git
- [ ] Tested email sending with production API key
- [ ] Verified domain authentication (SPF/DKIM records)
- [ ] Updated from email if not `me@otobong.com`
- [ ] Reviewed email templates for branding
- [ ] Tested on multiple email clients
- [ ] Reviewed error handling and logging
- [ ] Set up monitoring for failed deliveries
- [ ] Documented API key location for team

---

## 🔐 Environment Variables

### Development
```env
MAILCHIMP_API_KEY=your_development_key
```

### Production

Use your hosting provider's dashboard:
- **Vercel**: Settings → Environment Variables
- **Netlify**: Site Settings → Build & Deploy → Environment
- **Railway**: Variables → Add Variable
- **Heroku**: Settings → Config Vars

**Never use `.env.local` in production!**

---

## 📚 Reference

### Mandrill API Documentation
- [Mandrill API Reference](https://mandrillapp.com/api/docs)
- [Messages Send Endpoint](https://mandrillapp.com/api/docs/messages.html)

### MailChimp Documentation
- [Getting Started with Mandrill](https://mailchimp.com/en/help/about-mandrill/)
- [Sending Domains](https://mailchimp.com/en/help/verify-sending-domain/)

### Related Docs
- [PASSWORD_WALL_GUIDE.md](./PASSWORD_WALL_GUIDE.md) - Email request form
- [CHANGELOG.md](./CHANGELOG.md) - Version history

---

## ❓ FAQ

### Q: Can I use a different email service?
**A**: Yes, the API route is service-agnostic. Replace Mandrill with SendGrid, AWS SES, or other providers by updating the fetch call.

### Q: How do I change the recipient email?
**A**: Edit `/app/api/send-request/route.ts`:
```typescript
// Change this line:
const ownerEmail = "me@otobong.com"  // ← Update this
```

### Q: Can I customize the email templates?
**A**: Yes, modify the `userEmailHtml` and `ownerEmailHtml` strings in the API route to match your branding.

### Q: How are email opens tracked?
**A**: Mandrill inserts a tracking pixel in the HTML email. When opened, it reports back to Mandrill.

### Q: Is my data secure?
**A**:
- API key never exposed to client
- Validation on server-side
- HTTPS encryption in transit
- MailChimp's secure infrastructure

---

## 🎉 Summary

The email integration provides:

✅ Automated email confirmation
✅ Owner notifications
✅ Delivery tracking
✅ Recruiter validation
✅ Error handling
✅ Production ready

---

**Last Updated**: November 1, 2025
**Maintained by**: Otobong Okoko
**Status**: ✅ Complete and Tested
