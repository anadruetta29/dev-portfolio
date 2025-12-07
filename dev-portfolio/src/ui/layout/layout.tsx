import Header from "../components/molecules/header/header";
import style from "./style.module.css";

type Props = {
    children: React.ReactNode;
    withHeader: boolean;
};

export default function Layout({ children, withHeader }: Props) {
    return (
        <div className={`container ${withHeader ? style.container : ""}`}>
            {withHeader && <Header />}
            
            <main className={`delimiter ${withHeader ? style.container : ""}`}>
                {children}
            </main>
        </div>
    );
}
