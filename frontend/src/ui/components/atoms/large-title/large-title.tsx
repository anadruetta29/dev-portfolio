import style from "./style.module.css";

type Props = {
  text?: string;
  children?: React.ReactNode;
};

export default function LargeTitle({ text, children}: Props) {
  return (
    <h1 className={style.container}>
      {children ?? text}
    </h1>
  );
}
