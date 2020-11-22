import { useState, useEffect } from "react";
import Head from "next/head";
import Link from 'next/link';
import styles from './Layout.module.css'
import Brightness4Icon from '@material-ui/icons/Brightness4';

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
                    <img src="/logo.png" width="80px" alt="Logo" />
                </Link>
                <button className={styles.theme_switcher} onClick={switchTheme}>
                    <Brightness4Icon />
                </button>
            </header>

            <main className={styles.main}>{children}</main>

            <footer className={styles.footer}>
                <div className={styles.footer_label}>&copy; Niyaz @ https://jniyaz.github.io/niyaz</div>
                <div className={styles.footer_label}>Credits: Thu Nghiem</div>
            </footer>
        </div>
    )
}

export default Layout;