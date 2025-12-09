import InputLabel from "../../atoms/input-label/input-label";
import style from "./style.module.css";

type Props = {

}

export default function ContactMeForm() {
    return(
        <form>
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
        </form>
    )
}