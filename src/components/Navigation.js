import Link from "next/link";
import styles from "../styles/header.module.css"

const Navigation = () => {
    return (
        <div className={styles.header}>
        <div className="col-md-12">
            <ul>
                <li>
                    <Link href="/">Inicio</Link>
                </li>
                <li>
                    <Link href="/contact">Contacto</Link>
                </li>
                <li>
                    <Link href="/politics">Políticas de uso</Link>
                </li>
                <li>
                    <Link href="/vision-mission">Visión y Misión</Link>
                </li>

            </ul>
        </div>
        </div>
    );
};
export default Navigation;