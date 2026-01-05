import style from "./style.module.css";

type Props = {
    icon: string;
    title: string;
    information?: string;
    href: string;
}

export default function ContactItem({
    icon,
    title,
    information,
    href
}: Props) {
    return (
        <div className={style.container}>
            <img src={icon} alt={title} className={style.icon} />

            <div className={style.header}>
                <span className={style.title}>{title}</span>

                {information && (
                    <a
                        href={href}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={style.link}
                    >
                        {information}
                    </a>
                )}
            </div>
        </div>
    );
}
