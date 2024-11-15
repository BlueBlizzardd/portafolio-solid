import { Component, Index } from 'solid-js'
import '../../styles/options.css'
import { MenuItem } from '../../components/menu-item';

export const Options: Component = () => {
    const options: string[] = ['Animation Speed', 'Exit'];

    return (
        <div class="d-grid options">
            <Index each={options}>
                {option =>
                    <MenuItem title={option()} />
                }
            </Index>
        </div>
    )
}