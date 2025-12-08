import FadeIn from "../../atoms/fade-in/fade-in";
import ProjectItem from "../../molecules/project-item/project-item";
import fortuneUI from "../../../assets/ui-projects/fortune.svg";
import MediumTitle from "../../atoms/medium-title/medium-title";
import style from "./style.module.css";

type Props = {
    id: string;
}

export default function ProjectsSection({ id }: Props) {
    return (
        <section id={id} className={style.container}>
            <div className={style.title}>
                <FadeIn delay={0}>
                    <MediumTitle text="Proyectos" />
                </FadeIn>
            </div>
            <div className={style.projects}>
                <ProjectItem
                    description="ForTune es una aplicación web orientada a músicos que buscan oportunidades laborales, colaboraciones y 
                    comunicación con otros artistas. El sistema permite a los usuarios crear un perfil profesional, publicar sus habilidades, 
                    recibir propuestas, chatear en tiempo real con otros músicos, y buscar proyectos musicales acordes a su estilo."
                    image={fortuneUI}
                    technologies={["Java", "Typescript", "PostgreSQL"]}
                    title="ForTune"
                    year="2025"
                    githubLink="https://github.com/2piradrian/seminario-client.git"

                />
            </div>
        </section> 
    )
}