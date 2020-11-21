import Head from "next/head";
import Link from "next/Link";
import styles from './Layout.module.css'

const Layout = ({ children, title= "Countries App" }) => {
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
            </header>

            <main className={styles.main}>{children}</main>

            <footer className={styles.footer}>
            Niyaz @ n-labs.in
            </footer>
        </div>
    )
}

export default Layout;