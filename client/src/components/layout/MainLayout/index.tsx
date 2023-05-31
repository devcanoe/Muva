import { ReactNode } from "react";
import Navbar from "../Navbar";
import styles from "./index.module.css";
import Footer from "../Footer";

interface IMainLayout {
    children: ReactNode
}

export default function MainLayout({children}: IMainLayout) {
    return (
        <>
            <div className={styles.container}>
                <Navbar />
                <main className={styles.main}>
                    {children}
                </main>
                <Footer/>
            </div>
        </>
    )
}