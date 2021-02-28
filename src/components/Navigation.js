import Link from "next/link";

const Navigation = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/contacto">Contacto</Link>
                </li>
                <li>
                    <Link href="/politicas">Politicas de uso</Link>
                </li>
                <li>
                    <Link href="/vision-mision">Visión y Misión</Link>
                </li>

            </ul>
        </div>
    );
};
export default Navigation;