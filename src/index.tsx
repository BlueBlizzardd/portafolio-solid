/* @refresh reload */
import { render } from 'solid-js/web'
import { Route, Router } from '@solidjs/router'
import './index.css'
import { TitleScreen } from './routes/title-screen'
import { Menu } from './routes/(menus)/menus'

const root = document.getElementById('root')

render(() => (
    <Router>
        <Route path={'/'} component={TitleScreen}></Route>
        <Route component={Menu}>
            <Route path={'/about'}></Route>
            <Route path={'/garage'}></Route>
            <Route path={'options'}></Route>
        </Route>
    </Router>
), root!)
