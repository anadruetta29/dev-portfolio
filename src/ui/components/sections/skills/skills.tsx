import Chip from "../../atoms/chip/chip";
import MediumTitle from "../../atoms/medium-title/medium-title";
import reactIcon from "../../../assets/icons/react.svg";
import jsIcon from "../../../assets/icons/js.svg";
import cssIcon from "../../../assets/icons/css.svg";
import dockerIcon from "../../../assets/icons/docker.svg";
import tsIcon from "../../../assets/icons/typescript.svg"
import javaIcon from "../../../assets/icons/java.svg";
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
                    <img src={reactIcon} alt="react icon" />
                    <img src={jsIcon} alt="js icon" />
                    <img src={tsIcon} alt="typescript icon" />
                    <img src={cssIcon} alt="css icon" />
                    <img src={dockerIcon} alt="docker icon" />
                    <img src={javaIcon} alt="java icon" />
            </div>
        </section>
    );
}