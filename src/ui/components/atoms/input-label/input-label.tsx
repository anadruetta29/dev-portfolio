import style from "./style.module.css"

type Props = {
    id: string;
    type: "text" | "number" | "password" | "date";
    placeholder:string;
    required?: boolean;
    label?: string;
    value?: string | undefined;
    onChange?: (value: string) => void;
}

export default function InputLabel({label, type, placeholder, id, required, value, onChange}: Props) {
    return (
        <div className={style.container}>
            {label && <label htmlFor={id}>{label}</label>}
            
            <input 
                type={type} 
                placeholder={placeholder} 
                name={id} 
                id={id} 
                value={value} 
                onChange={e => onChange?.(e.target.value)} 
                required={required}
                onWheel={e => e.currentTarget.blur()}
            />
        </div>
    );
}
