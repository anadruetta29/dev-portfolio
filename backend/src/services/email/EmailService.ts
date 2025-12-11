import nodemailer, { Transporter } from 'nodemailer';
import dotenv from 'dotenv';
import type { SendMailOptions } from './SendMailOptions';

dotenv.config();

export class EmailService {

  private transporter: Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: process.env.MAILER_SERVICE,
      auth: {
        user: process.env.MAILER_EMAIL,
        pass: process.env.MAILER_SECRET_KEY,
      }
    });
  }

  async sendEmail(options: SendMailOptions): Promise<boolean> {
    const { to, subject, htmlBody, attachements = [] } = options;

    try {
      const info = await this.transporter.sendMail({
        to,
        subject,
        html: htmlBody,
        attachments: attachements,
      });

      return !!(info && info.accepted.length);
    } catch (error) {
      console.error("Error enviando email:", error);
      return false;
    }
  }
}
