import React, { useState } from 'react'

const SearchItems = ({ items }) => {

    const [searchTerm, setSearchTerm] = useState('')

    const filteredItems = items.filter((item) => {
        return item.toLowerCase().includes(searchTerm.toLowerCase())
    })

    return (
        <div>
            <input
                type="text"
                placeholder='Search Items'
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <ul>
                {filteredItems.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default SearchItems