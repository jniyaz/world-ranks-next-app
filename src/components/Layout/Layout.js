import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/Link";
import styles from './Layout.module.css'
import { Brightness6Rounded } from "@material-ui/icons";

const Layout = ({ children, title= "Countries App" }) => {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', localStorage.getItem("theme"));
        setTheme(localStorage.getItem("theme"));
    }, []);

    const switchTheme = () => {
        if (theme === 'light') {
            saveTheme("dark")
        } else {
            saveTheme("light")
        }
    }

    const saveTheme = (theme) => {
        setTheme(theme);
        localStorage.setItem("theme", theme)
        document.documentElement.setAttribute('data-theme', theme);
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className={styles.header}>
                <Link href="/">
                    <img src="/logo.png" width="120px" alt="Logo" />
                </Link>
                <button className={styles.theme_switcher} onClick={switchTheme}>
                    <Brightness6Rounded />
                </button>
            </header>

            <main className={styles.main}>{children}</main>

            <footer className={styles.footer}>
            Niyaz @ n-labs.in
            </footer>
        </div>
    )
}

export default Layout;