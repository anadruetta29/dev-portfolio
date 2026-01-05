import SmallTitle from "../../atoms/small-title/small-title";
import style from "./style.module.css";

type Props = {
    year: number;
}

export default function FooterSection( { year } : Props) {
    return(
        <footer>
            <div className={style.container}>
                <div className={style.information}>
                    <div className={style.leftSide}>
                        <SmallTitle 
                            text="Un poco sobre mí"
                        />
                        <p className={style.paragraph}>
                            Me enfoco en construir sistemas mantenibles, escalables y que 
                            representen soluciones para problemas de la vida real. 
                        </p>
                    </div>
                    <div className={style.rightSide}>
                        <SmallTitle 
                            text="Mantengámonos conectados"
                        />
                        <span className={style.communication}>Seguime en LinkedIn</span>
                        <span className={style.communication}>Revisá mis proyectos en GitHub</span>
                        <span className={style.communication}>Escribime por Mail</span>
                    </div>
                    {/* <div className={style.leftSide}>
                        <LanguageSelector
                            value={currentLanguage}
                            options={[
                                { value: "es", label: "ES" },
                                { value: "en", label: "EN" }
                            ]}
                            onChange={changeLanguage}
                        />
                    </div> */}
                </div>
                <span className={style.copyright}>
                    © {year} Ana Druetta — Todos los derechos reservados
                </span>
            </div>
        </footer>
    )
}