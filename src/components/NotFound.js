import React from 'react'
import {useHistory} from 'react-router-dom'

const NotFound = () => {
    const history = useHistory()

    const goHome = () => {
        history.push('/')
    }

    return (
        <div>
            <h1>PAGE NOT FOUND 404. or is it...</h1>
            <button onClick={goHome}></button>
        </div>
    )
}

export default NotFound