import FadeIn from "../../atoms/fade-in/fade-in";
import LargeTitle from "../../atoms/large-title/large-title";
import SlideIn from "../../atoms/slide-in/slide-in";
import myPhoto from "../../../assets/myPhoto.png";
import githubIcon from "../../../assets/icons/github.svg";
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
                    <div className={style.roleTag}>Desarrolladora de Software</div>
                </FadeIn>

                <FadeIn delay={0.2}>
                    <LargeTitle text="Hola! Soy Ana" />
                </FadeIn>


                <FadeIn delay={0.4}>
                    <p className={style.description}>
                        Creo sistemas con un enfoque en el detalle: limpios, rápidos y con una
                        identidad fuerte, pensados para ofrecer experiencias claras, eficientes 
                        y memorables. Explorá mis proyectos y contactame para trabajar juntos.
                    </p>
                </FadeIn>

                <FadeIn delay={0.6}>
                    <MainIconButton 
                        text="GitHub"
                        type="button"
                        enabled={true}
                        icon={githubIcon}
                        onClick={() => window.open("https://github.com", "_blank")}
                    />
                </FadeIn>

            </div>

            <SlideIn from="right" delay={0.4}>
                <div className={style.rightSide}>
                    <div className={style.imageWrapper}>
                        <img src={myPhoto} alt="My photo" />
                    </div>
                </div>
            </SlideIn>

        </section>
    );
}