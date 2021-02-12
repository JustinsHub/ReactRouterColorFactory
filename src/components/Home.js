import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {


    return (
        <div>
            Welcome Home
            <Link to="/colors">See all colors</Link>
        </div>
    )
}

export default Home