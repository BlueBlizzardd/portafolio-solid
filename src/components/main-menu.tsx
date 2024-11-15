import { A } from "@solidjs/router";
import { Component, Index } from "solid-js"
import { MenuItem } from "./menu-item";
import '../styles/main-menu.css'

type MenuProps = {
    ref: HTMLDialogElement;
}

export const MainMenu: Component<MenuProps> = (props) => {
    const options = ["garage", "about", "options"];

    return (
        <dialog ref={props.ref}>
            <Index each={options}>
                {option =>
                    <A href={`/${option()}`}>
                        <MenuItem title={option()} />
                    </A>
                }
            </Index>
        </dialog>
    )
}