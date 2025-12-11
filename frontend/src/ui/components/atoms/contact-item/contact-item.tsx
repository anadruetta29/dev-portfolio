import style from "./style.module.css";

type Props = {
    icon: string;
    title: string;
    information?: string;
}

export default function ContactItem({ icon, title, information }: Props) {
    return (
        <div className={style.container}>
            <img src={icon} alt={title} className={style.icon} />
            <div className={style.header}>
                <span className={style.title}>{title}</span>
                {information && (
                    <span className={style.information}>{information}</span>
                )}
            </div>
        </div>
    );
}
