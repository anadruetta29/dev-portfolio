import { Request, Response } from "express";
import { EmailService } from "../services/email/EmailService";
import { SendMailOptions } from "../services/email/SendMailOptions"


export class EmailController {
  	private emailService: EmailService;


	constructor() {
		this.emailService = new EmailService();
	}
	
	send = async (req: Request, res: Response) => {
		const { name, email, message } = req.body;

		try {
			const success = await this.emailService.sendContactEmail({ name, email, message });
			if (!success) return res.status(400).json({ ok: false, msg: "Error enviando email" });
			return res.json({ ok: true, msg: "Mensaje enviado correctamente" });
		} 
		catch (error) {
			console.error(error);
			return res.status(500).json({ ok: false, msg: "Error interno" });
		}
		
	};

}
