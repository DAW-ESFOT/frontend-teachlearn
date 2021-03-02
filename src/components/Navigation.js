import Link from "next/link";
import styles from "../styles/header.module.css"

const Navigation = () => {
    return (
        <div className={styles.header}>
        <div className={styles.container}>
            <Link href="/">Inicio</Link>
            <Link href="/contact">Contacto</Link>
            <Link href="/politics">Políticas de uso</Link>
            <Link href="/vision-mission">Visión y Misión</Link>
        </div>
        </div>
    );
};
export default Navigation;