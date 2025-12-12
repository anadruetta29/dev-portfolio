import nodemailer, { Transporter } from 'nodemailer';
import dotenv from 'dotenv';
import { SendMailOptions } from './SendMailOptions';

dotenv.config();

export class EmailService {
  	private transporter: Transporter;


  	constructor() {
    	this.transporter = nodemailer.createTransport({
			host: process.env.SMTP_HOST,
			port: Number(process.env.SMTP_PORT),
			secure: false,
			auth: {
				user: process.env.SMTP_USER,
				pass: process.env.SMTP_PASS,
			}
		});
  	}	

  	async sendContactEmail(options: SendMailOptions): Promise<boolean> {
    	const { name, email, message, attachments = [] } = options;

    	try {
			const info = await this.transporter.sendMail({
				from: `${name}`,
				replyTo: `${name} <${email}>`,
				to: process.env.SMTP_USER,
				subject: `Nuevo mensaje de ${name}`,
				html: `
					<p><strong>De:</strong> ${name} (${email})</p>
					<p><strong>Mensaje:</strong></p>
					<p>${message}</p>
				`
			});
      	return !!(info && info.accepted.length);
    	} 
		catch (error) {
      		console.error("Error enviando email:", error);
      		return false;
    	}
  	}
}
