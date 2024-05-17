import React from 'react'

const RandomQuote = () => {

    const quotes = [
        {
            quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
            author: "Nelson Mandela"
        },
        {
            quote: "The way to get started is to quit talking and begin doing.",
            author: "Walt Disney"
        },
        {
            quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma - which is living with the results of other people's thinking.",
            author: "Steve Jobs"
        }
    ]

    const randomIndex = Math.floor(Math.random() * quotes.length)

    return (
        <div>
            <p>{quotes[randomIndex].quote}</p>
            <p>{quotes[randomIndex].author}</p>
        </div>
    )
}

export default RandomQuote