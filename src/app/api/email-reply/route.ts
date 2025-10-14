import { NextRequest, NextResponse } from 'next/server';

// API route to handle email replies routed through the website
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // This will handle incoming email replies from services like:
    // - Mailgun
    // - SendGrid
    // - Postmark
    // - Webhook from email services
    
    const {
      from,
      to,
      subject,
      text,
      html,
      'message-id': messageId,
      'in-reply-to': inReplyTo,
    } = body;

    // Log the incoming reply
    console.log('Email reply received:', {
      from,
      to,
      subject,
      timestamp: new Date().toISOString(),
    });

    // Forward the reply to your main email
    try {
      // Method 1: Forward via Formspree
      const forwardResponse = await fetch('https://formspree.io/f/mnngoawq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: `Email Reply from ${from}`,
          email: from,
          message: `REPLY RECEIVED:\n\nOriginal Subject: ${subject}\n\nReply Message:\n${text || html}\n\n---\nThis is an automated forward of an email reply to your portfolio contact.`,
          _subject: `[PORTFOLIO REPLY] ${subject}`,
        }),
      });

      if (forwardResponse.ok) {
        return NextResponse.json({
          success: true,
          message: 'Reply forwarded successfully',
          service: 'formspree'
        });
      }
    } catch (error) {
      console.error('Formspree forwarding failed:', error);
    }

    // Method 2: Store in a simple log (you could use a database here)
    const replyLog = {
      id: Date.now().toString(),
      from,
      to,
      subject,
      message: text || html,
      timestamp: new Date().toISOString(),
      messageId,
      inReplyTo,
    };

    // You could store this in a database, file, or external service
    console.log('Reply stored:', replyLog);

    return NextResponse.json({
      success: true,
      message: 'Reply received and logged',
      service: 'webhook'
    });

  } catch (error) {
    console.error('Email reply processing error:', error);
    return NextResponse.json(
      { error: 'Failed to process email reply' },
      { status: 500 }
    );
  }
}

// Handle GET requests for webhook verification
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const challenge = searchParams.get('challenge');
  
  // Some email services require webhook verification
  if (challenge) {
    return new Response(challenge);
  }
  
  return NextResponse.json({
    message: 'Email reply webhook endpoint is active',
    timestamp: new Date().toISOString()
  });
}
