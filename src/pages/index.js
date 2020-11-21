import Layout from "../components/Layout/Layout";
import SearchInput from "../components/SearchInput/SearchInput";
import styles from "../styles/Home.module.css";

export default function Home({ countries }) {
  return (
    <Layout>
      <div className={styles.count}>Found {countries.length} countries.</div>
      <SearchInput />
    </Layout>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('https://restcountries.eu/rest/v1/all');
  const countries = await res.json();
  return {
    props: {
      countries,
    }
  }
}