import InputLabel from "../../atoms/input-label/input-label";
import MainButton from "../../atoms/main-button/main-button";
import SmallTitle from "../../atoms/small-title/small-title";
import style from "./style.module.css";

type Props = {
    onClick: () => void;
}
export default function ContactMeForm( {onClick}: Props) {
    return(
        <form className={style.container} onSubmit={onClick} >
            <SmallTitle text="Contactame!" />
            <InputLabel 
                id="name" 
                placeholder="Ingresa tu nombre completo"
                type="text"
                required
            />
            <InputLabel
                id="email"
                placeholder="Ingresa tu e-mail"
                type="text"
                required
            />
            <InputLabel 
                id="message"
                placeholder="Ingresa tu consulta"
                type="text"
                required
            />
            <MainButton 
                enabled
                text="Enviar consulta" 
                type="submit"
            />
        </form>
    )
}