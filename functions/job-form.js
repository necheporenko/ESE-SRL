'use strict';
const sendgrid = require('@sendgrid/mail');

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async (event, context) => {
  const {
    jobTitle,
    jobDescription,
    firstName,
    lastName,
    phone,
    email,
    message,
    resume,
  } = event.body;
  try {
    await sendgrid.send({
      to: 'ne4eporenko.v@gmail.com',
      from: 'website@ese-srl.com',
      subject: jobDescription
        ? `New sign up at the Job form - ${jobDescription} position!`
        : 'New sign up at the Job form!',
      html: `
      <!DOCTYPE html>
      <html>
        <body>
          <h2>Dear Admin,</h2>
          <p>Another user has submitted the Job form at the ESE-SRL website${
            jobTitle ? `, ${jobTitle} - ${jobDescription}` : '!'
          }</p>
        
          <h3>Info:</h3>
          <div><b>First name:</b> ${firstName}</div>
          <div><b>Last name:</b> ${lastName}</div>
          <div><b>Phone number:</b> ${phone}</div>
          <div><b>Email address:</b> ${email}</div>
          <div><b>Message:</b> ${message}</div>
        </body>
      </html>
      `,
      attachments: [
        {
          content: resume.toString('base64'),
          filename: resume.name,
          type: resume.type,
          disposition: 'attachment',
        },
      ],
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
