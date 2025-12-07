import LargeTitle from "../../atoms/large-title/large-title";
import computerAndPeople from "../../../assets/icons/computer-and-people.svg";
import FadeIn from "../../atoms/fade-in/fade-in";
import style from "./style.module.css";

type Props = {
    id: string;
}

export default function HomeSection({ id }: Props) {
    return (
        <section id={id} className={style.container}>
            <div className={style.middleInformation}>
                <LargeTitle text="Construyendo interfaces modernas y sistemas eficientes" />
                <FadeIn delay={0.2}>
                    <img src={computerAndPeople} alt="computer and people" />
                </FadeIn>
            </div>
    
        </section>
    );
}