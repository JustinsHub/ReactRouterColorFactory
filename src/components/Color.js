import React from 'react'
import {useParams, useHistory} from 'react-router-dom'

const Color = () => {
    const {color} = useParams()
    const history = useHistory()

    const handleClick = () => {
        history.push('/colors')
    }
    return (
        <div style={{backgroundColor: color}}>
            <h1>Welcome to the color {color}!</h1>
            <p1>Take a quick look around and feast your eyes.</p1>
            <div>
            <button onClick={handleClick}>Go Back To Colors</button>
            </div>
        </div>
    )
}

export default Color