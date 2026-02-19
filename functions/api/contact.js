/**
 * Cloudflare Pages Function - Contact Form Handler
 */
export async function onRequestPost(context) {
  const { request, env } = context;

  console.log('Environment check:', {
    hasTurnstileSecret: !!env.TURNSTILE_SECRET_KEY,
    hasResendKey: !!env.RESEND_API_KEY,
  });

  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  if (request.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data = await request.json();
    const { name, email, message, turnstileToken } = data;

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: 'Invalid email address' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (!turnstileToken) {
      return new Response(
        JSON.stringify({ error: 'Missing security token' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const turnstileResponse = await fetch(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          secret: env.TURNSTILE_SECRET_KEY,
          response: turnstileToken,
        }),
      }
    );

    const turnstileResult = await turnstileResponse.json();

    if (!turnstileResult.success) {
      return new Response(
        JSON.stringify({ error: 'Security verification failed', details: turnstileResult['error-codes'] }),
        { status: 403, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const emailPayload = {
      from: 'Matthias Salamon <noreply@matthiassalamon.com>',
      to: ['info@matthiassalamon.com'],
      reply_to: email,
      subject: `MacActing message from: ${name}`,
      html: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #4a4a4a; color: white; padding: 20px; text-align: center; }
    .content { background: #f4f4f4; padding: 20px; margin: 20px 0; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #555; }
    .footer { text-align: center; color: #888; font-size: 12px; padding: 20px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header"><h1>New Contact Form Submission</h1></div>
    <div class="content">
      <div class="field"><div class="label">Name:</div><div>${name}</div></div>
      <div class="field"><div class="label">Email:</div><div><a href="mailto:${email}">${email}</a></div></div>
      <div class="field"><div class="label">Message:</div><div style="white-space: pre-wrap;">${message}</div></div>
    </div>
    <div class="footer">Sent from: macsalamon.com Contact Form<br>Time: ${new Date().toLocaleString()}</div>
  </div>
</body>
</html>`,
    };

    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${env.RESEND_API_KEY}`,
      },
      body: JSON.stringify(emailPayload),
    });

    if (!emailResponse.ok) {
      const errorBody = await emailResponse.text();
      throw new Error(`Failed to send email: ${emailResponse.status} - ${errorBody}`);
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Message sent successfully' }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
}
