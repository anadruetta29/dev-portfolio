import ContactItem from "../../atoms/contact-item/contact-item";
import linkedInIcon from "../../../assets/icons/linkedin.svg";
import emailIcon from "../../../assets/icons/email.svg";
import phoneIcon from "../../../assets/icons/phone.svg";
import MediumTitle from "../../atoms/medium-title/medium-title";
import style from "./style.module.css";

type Props = {
    id: string;
}

export default function ContactSection({ id }: Props) {
    return (
        <section id={id} className={style.container}>
            <div className={style.title}>
                <MediumTitle text="Contactame" />
            </div>
            <p className={style.subtitle}>
                ¿Tenés una idea, proyecto o propuesta?  
                Estoy abierta a nuevas oportunidades.
            </p>
            <div className={style.contactsWrapper}>
                <div className={style.contacts}>
                    <ContactItem icon={linkedInIcon} title="LinkedIn" information="ana-druetta-80a4a8342" />
                    <ContactItem icon={emailIcon} title="Email" information="anadruetta2020@gmail.com"/>
                    <ContactItem icon={phoneIcon} title="Teléfono" information="3512056971"/>
                </div>
            </div>
        </section> 
    )
}