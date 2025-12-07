import { Link } from "react-router-dom";
import isologo from "../../../assets/isologo.png";
import style from "./style.module.css";

export default function Header() {
    return (
        <header className={style.container}>
            <Link to="/" className={style.logo}>
                <img src={isologo} alt="logo" />
            </Link>

            <nav className={style.nav}>
                <Link to="/sobre-mi">Sobre mí</Link>
                <Link to="/sobre-mi">Skills</Link>
                <Link to="/proyectos">Proyectos</Link>
                <Link to="/contacto">Contacto</Link>
            </nav>
        </header>
    );
}
