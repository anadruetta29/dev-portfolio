import style from "./style.module.css";

type Props = {
  activeSection: string;
};

export default function NavigationDots({ activeSection }: Props) {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <a className={activeSection === "about-me" ? style.active : ""} href="#about-me"></a>
        <a className={activeSection === "skills" ? style.active : ""} href="#skills"></a>
        <a className={activeSection === "projects" ? style.active : ""} href="#projects"></a>
        <a className={activeSection === "contact" ? style.active : ""} href="#contact"></a>
      </div>
    </div>
  );
}
