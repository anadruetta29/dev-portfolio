import FadeIn from "../../atoms/fade-in/fade-in";
import LargeTitle from "../../atoms/large-title/large-title";
import cv from "../../../../../public/cv/CV - Ana Druetta.pdf"
import githubIcon from "../../../assets/icons/github.svg";
import docIcon from "../../../assets/icons/document.svg";
import MainIconButton from "../../atoms/main-icon-button/main-icon-button";
import style from "./style.module.css";

type Props = {
    id: string;
}

export default function AbouteMeSection({ id }: Props) {
    return (
        <section id={id} className={style.container}>
            
            <div className={style.leftSide}>

                <FadeIn delay={0}>
                    <div className={style.titleInformation}>
                        <div className={style.roleTag}>Desarrolladora de Software</div>
                        <LargeTitle text="Hola! Soy Ana" />
                    </div>
                </FadeIn>

                <FadeIn delay={0.4}>
                    <p className={style.description}>
                        Creo sistemas con un enfoque en el detalle: limpios, rápidos y con una
                        identidad fuerte, pensados para ofrecer experiencias claras, eficientes 
                        y memorables. Explorá mis proyectos y contactame para trabajar juntos.
                    </p>
                </FadeIn>

                <FadeIn delay={0.6}>
                    <div className={style.informationButtons}>
                        <MainIconButton 
                            text="GitHub"
                            type="button"
                            enabled={true}
                            icon={githubIcon}
                            onClick={() => window.open("https://github.com", "_blank")}
                        />
                        <MainIconButton 
                            text="Ver currículum"
                            type="button"
                            enabled={true}
                            icon={docIcon}
                            onClick={() => window.open(cv, "_blank")}
                        />
                    </div>
                </FadeIn>

            </div>

        </section>
    );
}