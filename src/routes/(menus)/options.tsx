import { Component, Index } from 'solid-js'
import { A } from '@solidjs/router';
import '../../styles/options.css'
import { MenuItem } from '../../components/menu-item';

export const Options: Component = () => {
    const options: string[] = ['Toggle Animations'];
    let speed: 0 | 0.5 = 0;

    const animationToggle = () => {
        document.documentElement.style.setProperty('--animation-speed', `${speed}`);
        speed = speed ? 0 : 0.5;
    }

    return (
        <div class="d-grid options">
            <Index each={options}>
                {option =>
                    <MenuItem onclick={animationToggle} title={option()} />
                }
            </Index>
            <A href='/'>
                <MenuItem title='Exit' />
            </A>
        </div>
    )
}
