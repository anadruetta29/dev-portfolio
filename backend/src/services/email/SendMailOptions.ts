import type { Attachement } from "./Attachement";

export interface SendMailOptions {
  name: string;
  email: string;
  message: string;
  attachments?: Attachement[];
}
