import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Project } from "../../../domain/entity/Project";


export default function ViewModel() {


    // ------------------------------------------
    // SECTION SCROLL LISTENER
    // ------------------------------------------
    const [activeSection, setActiveSection] = useState("home");


    useEffect(() => {
        const sections = document.querySelectorAll("section");


        function handleScroll() {
            let current = "home";
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
    // EMAIL ACTION
    // ------------------------------------------
    const onClickOnSendEmail = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();


        const form = event.currentTarget;


        try {
            const formData = new FormData(event.currentTarget);
const data = Object.fromEntries(formData) as {
                name?: string;
                email?: string;
                message?: string;
            };


            const response = await fetch("http://localhost:4000/api/email/send", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
            });


            const result = await response.json();


            if (result.ok) {
                toast.success("Mensaje enviado correctamente");
                event.currentTarget.reset();
            }
            else {
                toast.error("Error enviando mensaje: " + result.msg);
            }


        } catch (error) {
            console.error("Error enviando mensaje:", error);
            toast.error("Error enviando mensaje");
        }
    };


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




    return {
        activeSection,
        onClickOnSendEmail,
        projects,
        currentProject,
        next,
        prev,
        isFading,
        current
    };
}


