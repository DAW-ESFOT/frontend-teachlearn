import Link from "next/link";
import styles from "../styles/header.module.css"
import React from "react";


const Navigation = () => {
    return (
        <div className={styles.header}>
        <div className={styles.container}>
            <Link href="/">Inicio</Link>
            <Link href="/contact">Contacto</Link>
            <Link href="/politics">Políticas de uso</Link>
            <Link href="/vision-mission">Visión y Misión</Link>
            <Link href="/login"><button type="button" className="btn btn-primary">Login</button></Link>
            <Link href="/register"><button type="button" className="btn btn-primary">Registro</button></Link>
            <Link href="/logint"><button type="button" className="btn btn-primary">prueba inicio</button></Link>
        </div>
        </div>
    );
};
export default Navigation;