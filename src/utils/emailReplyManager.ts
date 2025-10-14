// Email Reply System Utilities
// This helps you set up professional email reply routing through your website

export interface EmailReplyConfig {
  webhookUrl: string;
  replyToEmail: string;
  trackingEnabled: boolean;
  forwardingMethod: 'formspree' | 'webhook' | 'database';
}

export class EmailReplyManager {
  private config: EmailReplyConfig;

  constructor(config: EmailReplyConfig) {
    this.config = config;
  }

  // Generate a unique tracking ID for each conversation
  generateTrackingId(): string {
    const timestamp = Date.now();
    const random = Math.random().toString(36).substr(2, 9);
    return `msg_${timestamp}_${random}`;
  }

  // Create email headers for tracking replies
  createEmailHeaders(trackingId: string, originalSender: string) {
    return {
      'Reply-To': this.config.replyToEmail,
      'X-Tracking-ID': trackingId,
      'X-Original-Sender': originalSender,
      'X-Portfolio-Source': 'onepieceportfolio',
    };
  }

  // Generate mailto link with proper reply tracking
  generateMailtoReply(
    to: string, 
    subject: string, 
    trackingId?: string,
    originalMessage?: string
  ): string {
    const replySubject = subject.startsWith('Re:') ? subject : `Re: ${subject}`;
    
    let body = '\n\n---\n';
    body += `Reply via One Piece Portfolio`;
    if (trackingId) {
      body += `\nConversation ID: ${trackingId}`;
    }
    if (originalMessage) {
      body += `\n\nOriginal message:\n${originalMessage.substring(0, 200)}...`;
    }

    return `mailto:${to}?subject=${encodeURIComponent(replySubject)}&body=${encodeURIComponent(body)}`;
  }

  // Parse incoming webhook data
  parseWebhookData(webhookBody: any) {
    // Support multiple email service formats
    const commonFormat = {
      from: webhookBody.from || webhookBody.sender || webhookBody.From,
      to: webhookBody.to || webhookBody.recipient || webhookBody.To,
      subject: webhookBody.subject || webhookBody.Subject,
      text: webhookBody.text || webhookBody['body-plain'] || webhookBody.TextBody,
      html: webhookBody.html || webhookBody['body-html'] || webhookBody.HtmlBody,
      messageId: webhookBody['message-id'] || webhookBody.MessageID,
      inReplyTo: webhookBody['in-reply-to'] || webhookBody.InReplyTo,
      timestamp: webhookBody.timestamp || new Date().toISOString(),
    };

    // Extract tracking ID from subject
    const trackingMatch = commonFormat.subject?.match(/\[PORTFOLIO-([^\]]+)\]/);
    const trackingId = trackingMatch ? trackingMatch[1] : null;

    return {
      ...commonFormat,
      trackingId,
    };
  }
}

// Email service webhook instructions
export const WEBHOOK_SETUP_INSTRUCTIONS = {
  formspree: {
    name: "Formspree",
    steps: [
      "1. Go to formspree.io dashboard",
      "2. Find your form (mnngoawq)",
      "3. Go to Settings > Integrations", 
      "4. Add webhook URL: https://yoursite.vercel.app/api/email-reply",
      "5. Enable for 'New Submissions'"
    ]
  },
  
  mailgun: {
    name: "Mailgun", 
    steps: [
      "1. Set up Mailgun account for custom domain",
      "2. Configure Route: forward emails to webhook",
      "3. Webhook URL: https://yoursite.vercel.app/api/email-reply",
      "4. Set up email address: replies@yourdomain.com",
      "5. Configure DNS MX records"
    ]
  },
  
  sendgrid: {
    name: "SendGrid",
    steps: [
      "1. Create SendGrid account",
      "2. Set up Inbound Parse webhook", 
      "3. Webhook URL: https://yoursite.vercel.app/api/email-reply",
      "4. Configure subdomain: replies.yourdomain.com",
      "5. Set up MX record pointing to SendGrid"
    ]
  },
  
  gmail: {
    name: "Gmail Forwarding (Simple)",
    steps: [
      "1. In Gmail, go to Settings > Forwarding and POP/IMAP",
      "2. Add forwarding address with +tracking: yourname+portfolio@gmail.com", 
      "3. Create filter to auto-forward portfolio replies",
      "4. Use Gmail API to parse and forward to webhook (advanced)",
      "5. Alternative: Use Zapier/IFTTT to connect Gmail to webhook"
    ]
  }
};

// Sample environment variables needed
export const ENV_VARIABLES = {
  // Add to your .env.local file
  WEBHOOK_SECRET: "your_webhook_verification_secret",
  EMAIL_REPLY_ENDPOINT: "https://yoursite.vercel.app/api/email-reply", 
  REPLY_TO_EMAIL: "ygodara28+portfolio@gmail.com",
  DATABASE_URL: "optional_database_for_storing_replies",
};

export default EmailReplyManager;
