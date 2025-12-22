import Chip from "../../atoms/chip/chip";
import FadeIn from "../../atoms/fade-in/fade-in";
import MediumTitle from "../../atoms/medium-title/medium-title";
import SlideIn from "../../atoms/slide-in/slide-in";
import SmallTitle from "../../atoms/small-title/small-title";
import style from "./style.module.css";

type Props = {
    id: string;
};

export default function SkillsSection({ id }: Props) {
    return (
        <section id={id} className={style.container}>

            <div className={style.title}>
                <FadeIn delay={0.1}>
                    <MediumTitle text="Tecnologías" />
                </FadeIn>
            </div>
            <div className={style.technologies}>
                <SlideIn from="left" delay={0.2}>
                    <div className={style.categoryCard}>
                        <SmallTitle text="Frontend" />
                        <div className={style.chipRow}>
                            <Chip label="#React" />
                            <Chip label="#TypeScript" />
                            <Chip label="#JavaScript" />
                        </div>
                    </div>
                </SlideIn>
                <SlideIn from="left" delay={0.25}>
                    <div className={style.categoryCard}>
                        <SmallTitle text="Backend" />
                        <div className={style.chipRow}>
                            <Chip label="#Java" />
                            <Chip label="#Springboot" />
                            <Chip label="#PostgreSQL" />
                            <Chip label="#Node Js" />
                            <Chip label="#Express" />
                        </div>
                    </div>
                </SlideIn>
                <SlideIn from="left" delay={0.3}>
                    <div className={style.categoryCard}>
                        <SmallTitle text="Despliegue" />
                        <div className={style.chipRow}>
                            <Chip label="#Docker" />
                        </div>
                    </div>
                </SlideIn>
                <SlideIn from="left" delay={0.35}>
                    <div className={style.categoryCard}>
                        <SmallTitle text="Control de versiones" />
                        <div className={style.chipRow}>
                            <Chip label="#GitHub" />
                        </div>
                    </div>
                </SlideIn>
            </div>
        </section>
    );
}
