import Chip from "../../atoms/chip/chip";
import MediumTitle from "../../atoms/medium-title/medium-title";
import style from "./style.module.css";

type Props = {
    id: string;
}

export default function SkillsSection({ id }: Props) {
    return (
        <section id={id} className={style.container}>
                <div className={style.title}>
                    <MediumTitle text="Tecnologías" />
                </div>
            <div className={style.technologies}> 
                <Chip label="#React" /> 
                <Chip label="#Typescript" /> 
                <Chip label="#JavaScript" /> 
                <Chip label="#Java" /> 
                <Chip label="#Springboot" /> 
                <Chip label="#GitHub" /> 
                <Chip label="#Docker" /> 
            </div> 
            <div className={style.icons}> 

            </div>
        </section>
    );
}