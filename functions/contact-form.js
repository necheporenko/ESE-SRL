'use strict';
const sendgrid = require('@sendgrid/mail');

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async (event, context) => {
  const { fullName, phone, email, subject, message } = event.body;
  try {
    await sendgrid.send({
      to: 'ne4eporenko.v@gmail.com',
      from: 'website@ese-srl.com',
      subject: 'New message from the Contact Us form!',
      html: `
      <!DOCTYPE html>
      <html>
        <body>
          <h2>Dear Admin,</h2>
          <p>Another user has submitted the form at the ESE-SRL website.</p>
        
          <h3>Info:</h3>
          <div><b>Full name:</b> ${fullName}</div>
          <div><b>Phone number:</b> ${phone}</div>
          <div><b>Email address:</b> ${email}</div>
          <div><b>Subject:</b> ${subject}</div>
          <div><b>Message:</b> ${message}</div>
        </body>
      </html>
      `, // html body
    });
  } catch (error) {
    return {
      statusCode: error.statusCode || 500,
      body: JSON.stringify({ error: error.message }),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ error: '' }),
  };
};
