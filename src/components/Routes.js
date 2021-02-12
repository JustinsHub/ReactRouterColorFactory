import React, {useState} from 'react'
import {Switch, Route} from 'react-router-dom'
import NotFound from './NotFound'
import Home from './Home'
import Colors from './Colors'
import NewColor from './NewColor'
import ColorList from './ColorList'
import Color from './Color'

const Routes = () => {
    const [newColor, setNewColor] = useState([])

    const addColor = (color) => {
        setNewColor(newColor => [...newColor, color])
    }

    console.log(newColor)
    return (
        <div>
            <Switch>
            <Route exact path="/colors">
                <Colors/>
                {newColor.map(c => <ColorList colors={c}/>)}
            </Route>
            <Route exact path="/colors/new"><NewColor addColor={addColor}/></Route>
            <Route path="/colors/:color"><Color/></Route>
            <Route exact path="/"><Home/></Route>
            <Route><NotFound/></Route>
            </Switch>
        </div>
    )
}

export default Routes