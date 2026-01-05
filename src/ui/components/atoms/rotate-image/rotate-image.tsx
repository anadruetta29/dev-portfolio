import styles from './style.module.css';

type Props = {
    degrees: number;
    src: string;
    alt: string;
}

export default function RotateImage({ degrees, src, alt }: Props ) {

return (
        <div
            className={styles.container}
            style={{ "--degrees": `${degrees}deg` } as React.CSSProperties}
        >
            <img src={src} alt={alt} className={styles.image} />
        </div>
    );
}

