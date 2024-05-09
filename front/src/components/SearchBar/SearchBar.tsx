'use client'

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { useRouter } from 'next/navigation'

import styles from './SearchBar.module.scss';

const SearchBar: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const router = useRouter()

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
        // Perform search logic here
    };

const handleSubmit = (event: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    router.push('/items?search=' + searchTerm)
}
    

    return (
        <form className={styles.searchBarContainer} onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Nunca dejes de buscar"
                value={searchTerm}
                onChange={handleSearch}
                className={styles.searchBar}
            />
            <div className={styles.iconContainer} onClick={handleSubmit}>
                <FontAwesomeIcon icon={faSearch} className={styles.icon} />
            </div>
        </form>
    );
};

export default SearchBar;