import FadeIn from "../../atoms/fade-in/fade-in";
import ProjectItem from "../../molecules/project-item/project-item";
import fortuneUI from "../../../assets/ui-projects/fortune.svg";
import portfolioUI from "../../../assets/ui-projects/dev-portfolio.png";
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
                <ProjectItem
                    title="Portafolio Personal"
                    description="Portafolio moderno y responsive desarrollado para presentar mis proyectos, experiencia y 
                    habilidades como desarrolladora. Incluye diseño UI/UX propio, componentes reutilizables, secciones dinámicas, y 
                    animaciones suaves. Implementado con React y TypeScript, utilizando CSS Modules y prácticas de arquitectura limpia."
                    image={portfolioUI}  
                    technologies={["React", "TypeScript", "CSS Modules", "Figma"]}
                    year="2024"
                    githubLink="https://github.com/anadruetta29/dev-portfolio.git"
                /> 
            </div>
        </section> 
    )
}