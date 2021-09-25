import React from 'react'
import { useState } from "react";

export default function Search(props) {
    const [searchName, setSearchName] = useState('');
    const handleNameChange = (event) => props.setSearchName(event.target.value);

    return (
        <div>
          <form>
          <label htmlFor="search"></label>
          <input type="search" name="search" id="search" placeholder="Search by name" value={searchName} onChange={handleNameChange} />
          </form>
        </div>
    )
}
