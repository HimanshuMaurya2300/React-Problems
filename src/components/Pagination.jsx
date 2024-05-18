import React, { useState } from 'react'

const Pagination = ({ items, itemsPerPage }) => {

    const [currentPage, setCurrentPage] = useState(1)

    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem)

    return (
        <div>
            <ul>
                {currentItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <button onClick={() => {
                if (currentPage === 1) return
                setCurrentPage(currentPage - 1)
            }}>
                Previous
            </button>
            {currentPage}
            <button onClick={() => {
                if (currentPage === Math.ceil(items.length / itemsPerPage)) return
                setCurrentPage(currentPage + 1)
            }}>
                Next
            </button>
        </div>
    )
}

export default Pagination