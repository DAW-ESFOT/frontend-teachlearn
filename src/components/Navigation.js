import Link from "next/link";

const Navigation = () => {
    return (
        <div>
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
    );
};
export default Navigation;