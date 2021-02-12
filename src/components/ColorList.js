import React from 'react'
import {Link} from 'react-router-dom'

const ColorList = ({colors}) => {

    return (
        <div>
        <Link to={`/colors/${colors}`}>{colors}</Link>
        </div>
    )
}

export default ColorList