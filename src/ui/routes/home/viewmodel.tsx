import { useEffect, useState } from "react";
import { Project } from "../../../domain/entity/project.ts";


export default function ViewModel() {
    // ------------------------------------------
    // SECTION SCROLL LISTENER
    // ------------------------------------------
    const [activeSection, setActiveSection] = useState("about-me");


    useEffect(() => {
        const sections = document.querySelectorAll("section");

        function handleScroll() {
            let current = "about-me";
            const scrollPos = window.scrollY + 200;


            sections.forEach((section) => {
                if (scrollPos >= section.offsetTop) {
                    current = section.id;
                }
            });

            setActiveSection(current);
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    // ------------------------------------------
    // PROJECTS CAROUSEL
    // ------------------------------------------
    const projects: Project[] = [
        new Project(
            "ForTune",
            "ForTune es una aplicación web orientada a músicos que buscan oportunidades laborales, colaboraciones y comunicación con otros artistas. El sistema permite a los usuarios crear un perfil profesional, publicar sus habilidades, recibir propuestas, chatear en tiempo real con otros músicos, y buscar proyectos musicales acordes a su estilo.",
            ["Java", "Typescript", "PostgreSQL", "Springboot", "React"],"https://github.com/2piradrian/seminario-client.git",
            "2025"
        ),
        new Project(
            "Portafolio Personal",
            "Portafolio moderno y responsive desarrollado para presentar mis proyectos, experiencia y habilidades como desarrolladora. Incluye diseño UI/UX propio, componentes reutilizables, secciones dinámicas, y animaciones suaves. Implementado con React y TypeScript, utilizando CSS Modules y prácticas de arquitectura limpia.",
            ["React", "TypeScript", "CSS Modules", "Figma"],
            "https://github.com/anadruetta29/dev-portfolio.git",
            "2025"
        ),
        new Project(
            "Match Score Bot Server",
            "Match Score Bot Server es una API de backend para un chatbot conversacional que califica un interés romántico potencial del 1 al 10 basándose en las respuestas del usuario",
            ["Pyhton", "PostgreSQL", "FastAPI", "WebSocket", "SQLAlchemy", "Pydantic", "JSON"],
            "https://github.com/anadruetta29/match-bot-server",
            "2026"
        )
    ];

    const [currentProject, setCurrentProject] = useState(0);

    const next = () => {
        triggerFade();
        setCurrentProject((prev) =>
            prev === projects.length - 1 ? 0 : prev + 1
        );
    };

    const prev = () => {
        triggerFade();
        setCurrentProject((prev) =>
            prev === 0 ? projects.length - 1 : prev - 1
        );
    };

    const current = projects[currentProject];

    // ------------------------------------------
    // FADE ANIMATION
    // ------------------------------------------
    const [isFading, setIsFading] = useState(false);


    const triggerFade = () => {
        setIsFading(true);
        setTimeout(() => setIsFading(false), 300);
    };

    // ------------------------------------------
    // FOOTER INFORMATION
    // ------------------------------------------
    const currentYear = new Date().getFullYear();

    return {
        activeSection,
        projects,
        currentProject,
        next,
        prev,
        isFading,
        current,
        currentYear
    };
}


