import React, {useState} from 'react'
import {Button} from 'react-bootstrap'


const Home = (props) => {
    const [searchTerm, setSearchTerm] = useState(null)

    const handleChange = (e) => {
        setSearchTerm(e.target.value)
    }

    const handleSearch = (e) => {
        e.preventDefault()
        props.history.push(`/weather/${searchTerm}`)
    }
    return (
        <div>
            <h1>This is the Home page</h1>
            <form onSubmit={handleSearch}>
                <input type="text" placeholder="Search for a city" onChange={handleChange}/>
                <button>Search</button>
            </form>
        </div>
    )
}

export default Home