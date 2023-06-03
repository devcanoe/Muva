import mailer from "nodemailer";

export default class Emailer {
  message: mail;
  config: {};
  constructor(message: mail) {
    this.message = message;
    this.config = {
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "7cbba8cd33d77d", // generated ethereal user
        pass: "19b8b2e3f41803", // generated ethereal password
      },
    };
  }
  async send() {
    try {
      const transporter = await mailer.createTransport(this.config);
      await transporter.sendMail(this.message);
    } catch (error: any) {
      return error.message;
    }
  }
}

export interface mail {
  from: string;
  to: string;
  subject: string;
  text: string;
  html: string;
}
