import { Request, Response } from "express";
import { EmailService } from "../services/email/EmailService";
import { SendMailOptions } from "../services/email/SendMailOptions"

export class EmailController {
  private emailService: EmailService;

  constructor() {
    this.emailService = new EmailService();
  }

  send = async (req: Request, res: Response) => {
    const { to, subject, htmlBody, attachements } = req.body as SendMailOptions;

    try {
      const success = await this.emailService.sendEmail({
        to,
        subject,
        htmlBody,
        attachements,
      });

      if (!success) {
        return res.status(400).json({ ok: false, msg: "Error enviando email" });
      }

      return res.json({ ok: true, msg: "Email enviado correctamente" });
    } catch (error) {
      console.error("Error en EmailController:", error);
      return res.status(500).json({ ok: false, msg: "Error interno" });
    }
  };
}
