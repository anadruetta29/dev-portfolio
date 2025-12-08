import SmallTitle from "../../atoms/small-title/small-title";
import style from "./style.module.css";

type Props = {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    githubLink?: string;
    year: string;
};

export default function ProjectItem({  
    title, 
    description, 
    image, 
    technologies, 
    githubLink, 
    year 
}: Props) {
    return (
        <div className={style.container}>

            <div className={style.imageContainer}>
                <img src={image} alt={title} />
            </div>

            <div className={style.titleContainer}>
                <SmallTitle text={title} />
            </div>

            <div className={style.descriptionContainer}>
                <p>{description}</p>
            </div>

            <div className={style.technologiesContainer}>
                {technologies.map((tech) => (
                    <span key={tech} className={style.techTag}>{tech}</span>
                ))}
            </div>

            {year && (
                <div className={style.yearContainer}>
                    <p>{year}</p>
                </div>
            )}

            {githubLink && (
                <div className={style.githubContainer}>
                    <a href={githubLink}>
                        Ver código
                    </a>
                </div>
            )}

        </div>
    );
}
