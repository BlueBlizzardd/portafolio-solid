import { Component } from "solid-js";
import { MainMenu } from "../components/main-menu";
import { JSX } from "solid-js/h/jsx-runtime";

export const TitleScreen: Component = () => {
    let ref: HTMLDialogElement;

    const handleInput: JSX.EventHandler<HTMLButtonElement, MouseEvent | KeyboardEvent> = (event) => {
        event.stopPropagation();
        ref.showModal();
    };

    return (
        <div class="d-flex flex-column title-screen primary-bg">
            <div class="main title">Ridge Racer Type 4</div>
            <div class="content">
                <button
                    on:click={handleInput}
                    on:keyup={(e) => {
                        if (e.key === "Enter") handleInput(e);
                    }}
                    type="button"
                    class="btn-start title"
                    autofocus
                >
                    Press Enter Button
                </button>
                <div class="title page-rights">&copy; 2024 Eduardo Juliao</div>
            </div>
            <MainMenu ref={ref!} />
        </div>
    );
}