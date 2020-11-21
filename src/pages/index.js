import { useState } from "react";
import CountriesTable from "../components/CountriesTable/CountriesTable";
import Layout from "../components/Layout/Layout";
import SearchInput from "../components/SearchInput/SearchInput";
import styles from "../styles/Home.module.css";

export default function Home({ countries }) {
  const [keyword, setKeyword] = useState("");
  // Filter Countries
  const filteredCountries = countries.filter((country) => 
    country.name.toLowerCase().includes(keyword)
  );

  const onInputChange = (e) => {
    e.preventDefault();
    setKeyword(e.target.value);
  }

  return (
    <Layout>
      <div className={styles.count}>Found {countries.length} countries.</div>
      <SearchInput 
        placeholder="Search by Name, Region or Sub-region" 
        onChange={onInputChange}
      />
      <CountriesTable countries={filteredCountries} />
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