import React from 'react'
import {Link} from 'react-router-dom'

const Colors = ({colors}) => {
    return (
        <div>
            <h1>Welcome to our colors</h1>
            <Link to="/colors/new">Add New Color</Link>
        </div>
    )
}

export default Colors