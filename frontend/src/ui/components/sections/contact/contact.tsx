import ContactItem from "../../atoms/contact-item/contact-item";
import ContactMeForm from "../../molecules/contact-me-form/contact-me-form";
import linkedInIcon from "../../../assets/icons/linkedin.svg";
import emailIcon from "../../../assets/icons/email.svg";
import phoneIcon from "../../../assets/icons/phone.svg";
import style from "./style.module.css";

type Props = {
    id: string;
    onClickOnSendEmail: (event: React.FormEvent<HTMLFormElement>) => void;
}

export default function ContactSection({ id, onClickOnSendEmail }: Props) {
    return (
        <section id={id} className={style.container}>
            <div className={style.contactForm}>
                <ContactMeForm onClick={onClickOnSendEmail}/>
            </div>
            <div className={style.contacts}>
                <ContactItem icon={linkedInIcon} title="LinkedIn" information="ana-druetta-80a4a8342" />
                <ContactItem icon={emailIcon} title="Email" information="anadruetta2020@gmail.com"/>
                <ContactItem icon={phoneIcon} title="Teléfono" information="3512056971"/>
            </div>
        </section> 
    )
}