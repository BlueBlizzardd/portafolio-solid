import { Component } from "solid-js";
import '../styles/menu-item.css';

type ItemProps = {
    title: string,
    onclick?: () => void;
}

export const MenuItem: Component<ItemProps> = (props) => {
    return (
        <li onclick={props.onclick} class="d-grid menu-item">
            <span class="title">{props.title}</span>
            <button type="button" class="d-grid">
                <div class="square"></div>
                <div class="square"></div>
                <div class="square"></div>
                <div class="square"></div>
            </button>
        </li>
    );
}
