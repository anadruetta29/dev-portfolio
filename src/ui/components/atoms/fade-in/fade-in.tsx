import style from "./style.module.css";

type Props = {
    children: React.ReactNode;
    delay?: number; 
};

export default function FadeIn({ children, delay = 0 }: Props) {
    return (
        <div 
            className={style.fadeIn}
            style={{ animationDelay: `${delay}s` }}
        >
            {children}
        </div>
    );
}
