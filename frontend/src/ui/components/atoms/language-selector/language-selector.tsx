import type { Option } from "../../../../domain/entity/option";
import style from "./style.module.css";

type Props = {
    value: string;
    options: Option[];
    onChange: (value: string) => void;
};

export default function LanguageSelector({
    value,
    options,
    onChange
}: Props) {
    return (
        <div className={style.selectWrapper}>
            <select
                className={style.select}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            >
                {options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}

