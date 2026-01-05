import style from "./style.module.css"

type Props = {
    label: string;
}
export default function Chip({label}: Props){

    return(
        <div className={style.container}>
            <p>{label}</p>
        </div>
    )
}