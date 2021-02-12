import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'

const NewColor = ({addColor}) => {
    const INITIAL_STATE = ''
    const [color, setColor] = useState(INITIAL_STATE)
    const history = useHistory()

    const handleChange = (e) => {
        const {value} = e.target
        setColor(color => value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addColor(color)
        history.push(`/colors`)
        setColor(INITIAL_STATE)
    }

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="new-color">New Color:</label>
            <input
            id="new-color"
            type="text"
            name="newColor"
            value={color}
            placeholder="Name of color"
            onChange={handleChange}
            />
            <div>
            <button>Submit</button>
            </div>
        </form>
        </div>
    )
}

export default NewColor