import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {


    return (
        <div>
            <h1>Welcome Home</h1>
            <div>
                <Link to="/colors">See all colors</Link>
            </div>
        </div>
    )
}

export default Home