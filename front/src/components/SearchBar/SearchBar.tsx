"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

import styles from "./SearchBar.module.scss";
import Image from "next/image";

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLDivElement>
  ) => {
    event.preventDefault();
    if (searchTerm === "") return router.push("/");
    router.push("/items?search=" + searchTerm);
  };

  const goHome = () => {
    setSearchTerm("");
    router.push("/");
  }

  return (
    <div className={styles.outterContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.searchBar}>
          <div className={styles.logo} onClick={goHome}>
            <Image
              src="/logo.png"
              alt="Meli"
              className={styles.logo}
              width="40"
              height="30"
            />
          </div>
          <form
            className={styles.searchBarInputContainer}
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Nunca dejes de buscar"
              value={searchTerm}
              onChange={handleSearch}
              className={styles.searchBarInput}
            />
            <div className={styles.iconContainer} onClick={handleSubmit}>
              <FontAwesomeIcon icon={faSearch} className={styles.icon} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
