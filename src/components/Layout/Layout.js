import Head from "next/head";
import Image from 'next/image'
import styles from './Layout.module.css'

const Layout = ({ children, title= "Countries App" }) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className={styles.header}>
                <Image src="/logo.png" alt="Logo" width={100} height={60} quality={100} />
            </header>

            <main className={styles.main}>{children}</main>

            <footer className={styles.footer}>
            Niyaz @ n-labs.in
            </footer>
        </div>
    )
}

export default Layout;