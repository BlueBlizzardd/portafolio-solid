import { Component, Index } from 'solid-js'
import { A } from '@solidjs/router';
import '../../styles/options.css'
import { MenuItem } from '../../components/menu-item';

export const Options: Component = () => {
    const options: string[] = ['Toggle Animations'];

    return (
        <div class="d-grid options">
            <Index each={options}>
                {option =>
                    <MenuItem title={option()} />
                }
            </Index>
            <A href='/'>
                <MenuItem title='Exit' />
            </A>
        </div>
    )
}
