/* @refresh reload */
import { render } from 'solid-js/web'
import { Navigate, Route, Router } from '@solidjs/router'
import { TitleScreen } from './routes/title-screen'
import { Menu } from './routes/(menus)/menus'
import { About } from './routes/(menus)/about'
import { Garage } from './routes/(menus)/garage'
import { Options } from './routes/(menus)/options'
import { pageNames } from './types/pages'
import './index.css'

const root = document.getElementById('root')

render(() => (
    <Router>
        <Route path={'/'} component={TitleScreen}></Route>
        <Route component={Menu}>
            <Route path={'/about'} component={About} />
            <Route path={'/garage'} component={() => <Navigate href={`/garage/${pageNames[0]}`} />} />
            <Route path={'/garage/:page'} component={Garage} />
            <Route path={'options'} component={Options} />
        </Route>
    </Router>
), root!)
