import nodemailer, { Transporter } from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

interface ContactMailOptions {
  name: string;
  email: string;
  message: string;
  attachments?: any[];
}

export class EmailService {
  private transporter: Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: process.env.MAILER_SERVICE,
      auth: {
        user: process.env.MAILER_EMAIL,       
        pass: process.env.MAILER_SECRET_KEY,  
      },
    });
  }

  async sendContactEmail(options: ContactMailOptions): Promise<boolean> {
    const { name, email, message, attachments = [] } = options;

    try {
      const info = await this.transporter.sendMail({
        from: `"${name}" <${process.env.MAILER_EMAIL}>`, 
        to: process.env.MAILER_EMAIL,                   
        subject: `Nuevo mensaje de ${name}`,
        html: `
          <p><strong>De:</strong> ${name} (${email})</p>
          <p><strong>Mensaje:</strong></p>
          <p>${message}</p>
        `,
        attachments,
      });

      return !!(info && info.accepted.length);
    } catch (error) {
      console.error("Error enviando email:", error);
      return false;
    }
  }
}
