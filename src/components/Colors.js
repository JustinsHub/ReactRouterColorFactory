import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import NewColor from './NewColor'

const Colors = () => {
    const [newColor, setNewColor] = useState([])

    const addColor = (color) => {
        setNewColor(newColor => [...newColor, color])
    }
    //What are we submitting?
    //what prop are we passing down to Color?
    return (
        <div>
            <h1>Welcome to our colors</h1>
            <Link to="/color/new"><NewColor newColor={addColor}/></Link>
            {newColor.map(c => <Color/>)}
        </div>
    )
}

export default Colors