import { Link } from "react-router-dom";
import style from "./style.module.css";

export default function Header() {
    return (
        <header className={style.header}>
            <div className={style.inner}>
                <nav className={style.nav}>
                    <Link to="/sobre-mi">Sobre mí</Link>
                    <Link to="/skills">Skills</Link>
                    <Link to="/proyectos">Proyectos</Link>
                    <Link to="/contacto">Contacto</Link>
                </nav>
            </div>
        </header>
    );
}
