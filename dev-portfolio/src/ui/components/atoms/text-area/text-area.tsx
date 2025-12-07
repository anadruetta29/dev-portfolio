import style from "./style.module.css";

type Props = {
    label?: string;
    placeholder?: string;
    value: string;
    onChange: (value: string) => void;
    rows?: number;
};

export default function TextArea({ label, placeholder, value, onChange, rows = 4 }: Props) {
    return (
        <div className={style.container}>
            {label && <label className={style.label}>{label}</label>}
            <textarea
                className={style.textarea}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                rows={rows}
            />
        </div>
    );
}
