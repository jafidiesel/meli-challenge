import SearchBar from "../SearchBar/SearchBar";
import styles from "./Bar.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function Bar() {
  return (
    <div className={styles.outterContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.searchBar}>
          <Link href="/" className={styles.logo}>
            <Image src="/logo.png" alt="Meli" className={styles.logo} width="40" height="30"  />
          </Link>
          <SearchBar />
        </div>
      </div>
    </div>
  );
}
