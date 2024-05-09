import SearchBar from "../SearchBar/SearchBar";
import styles from "./Bar.module.scss";

export default function Bar() {
  return (
    <div className={styles.outterContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.searchBar}>
          <img
            src="https://http2.mlstatic.com/storage/developers-site-cms-admin/268205826549-Mercado-Libre--3-.png"
            alt="Meli"
            className={styles.logo}
          />
          <SearchBar />
        </div>
      </div>
    </div>
  );
}
