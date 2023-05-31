import Link from "next/link";
import styles from "./index.module.css";

export default function Navbar() {
    return (
        <>
            <nav className={styles.container}>
                <Link href={"/"}>Muva</Link>
            </nav>
        </>
    )
}