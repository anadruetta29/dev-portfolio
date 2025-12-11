import FadeIn from "../../atoms/fade-in/fade-in";
import ProjectItem from "../../molecules/project-item/project-item";
import MediumTitle from "../../atoms/medium-title/medium-title";
import style from "./style.module.css";
import type { Project } from "../../../../domain/entity/Project";

type Props = {
    id: string;
    next: () => void;
    prev: () => void;
    isFading: boolean; 
    current: Project;
};

export default function ProjectsSection({
    id,
    next,
    prev,
    isFading,
    current
}: Props) {

    return (
        <section id={id} className={style.container}>
            <div className={style.title}>
                <FadeIn delay={0}>
                    <MediumTitle text="Proyectos" />
                </FadeIn>
            </div>

            <div className={style.carouselWrapper}>

                <button className={style.arrow} onClick={prev}>
                    ❮
                </button>

                <div
                    className={`${style.slide} ${
                        isFading ? style.fadeOut : style.fadeIn
                    }`}
                >
                    {current && <ProjectItem {...current} />}
                </div>

                <button className={style.arrow} onClick={next}>
                    ❯
                </button>

            </div>
        </section>
    );
}
