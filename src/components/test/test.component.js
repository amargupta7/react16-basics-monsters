import React, { useState, useEffect } from 'react';

import CardList from '../card-list/card-list.component';
import Search from '../search/search.component';

const Test = () => {
    const [monsters, setMonsters] = useState([]);
    const [searchFilter, setSearchFilter] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((users) => {
                setMonsters(users);
            });
    }, []);

    const handleSearch = (event) => {
        setSearchFilter(event.target.value);
    }

    const filterMonsters = () => {
        return monsters.filter(
            (monster) => monster.name.includes(searchFilter)
        )
    }

    let filteredMonsters = filterMonsters();
    return (
        <>
            <h1 className='App'>Monsters!</h1>
            <Search onChange={handleSearch} />
            <CardList monsters={filteredMonsters} />
        </>
    );

}

export default Test;
