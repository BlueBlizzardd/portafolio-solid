import { A } from "@solidjs/router";
import { Component } from "solid-js"
import { MenuItem } from "./menu-item";

type MenuProps = {
    ref: HTMLDialogElement;
}

export const MainMenu: Component<MenuProps> = (props) => {
    const options = ["garage", "about", "options"];

    return (
        <dialog ref={props.ref}>
            {options.map(option => (
                <A href={`/${option}`}>
                    <MenuItem title={option} />
                </A>
            ))}
        </dialog>
    )
}