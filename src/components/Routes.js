import React from 'react'
import {Switch, Route} from 'react-router-dom'
import NotFound from './NotFound'
import Home from './Home'
import Colors from './Colors'

const Routes = () => {
    return (
        <div>
            <Switch>
            <Route exact path="/colors"><Colors/></Route>
            <Route exact path="/"><Home/></Route>
            <Route><NotFound/></Route>
            </Switch>
        </div>
    )
}

export default Routes