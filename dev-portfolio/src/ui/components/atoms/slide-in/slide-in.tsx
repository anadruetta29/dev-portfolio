import style from "./slidein.module.css";

type Props = {
    children: React.ReactNode;
    from?: "left" | "right";
    delay?: number;
};

export default function SlideIn({ children, from = "left", delay = 0 }: Props) {
    return (
        <div
            className={`${style.slideIn} ${style[from]}`}
            style={{ animationDelay: `${delay}s` }}
        >
            {children}
        </div>
    );
}
