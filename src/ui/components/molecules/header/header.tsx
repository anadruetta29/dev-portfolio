import style from "./style.module.css";

export default function Header() {
    return (
        <header className={style.header}>
            <div className={style.inner}>
                <nav className={style.nav}>
                    <a href="#about-me">Sobre mí</a>
                    <a href="#skills">Skills</a>
                    <a href="#proyectos">Proyectos</a>
                    <a href="#contacto">Contacto</a>
                </nav>
            </div>
        </header>
    );
}
