import SmallTitle from "../../atoms/small-title/small-title";
import style from "./style.module.css";

type Props = {
    title: string;
    description: string;
    technologies: string[];
    githubLink?: string;
    year: string;
};

export default function ProjectItem({
    title,
    description,
    technologies,
    githubLink,
    year
}: Props) {
    return (
        <div className={style.container}>

            <header className={style.header}>
                <SmallTitle text={title} />
                <span className={style.year}>{year}</span>
            </header>

            <p className={style.description}>{description}</p>

            <div className={style.techList}>
                {technologies.map((tech) => (
                    <span key={tech} className={style.techTag}>{tech}</span>
                ))}
            </div>

            {githubLink && (
                <a href={githubLink} className={style.githubButton} target="_blank">
                    Ver código →
                </a>
            )}
        </div>
    );
}
