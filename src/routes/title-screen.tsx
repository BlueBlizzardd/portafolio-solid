import { Component } from "solid-js";
import { MainMenu } from "../components/main-menu";
import { JSX } from "solid-js/h/jsx-runtime";
import '../styles/title-screen.css';
import '../styles/start-button.css';

export const TitleScreen: Component = () => {
    let ref: HTMLDialogElement;

    const handleInput: JSX.EventHandler<HTMLButtonElement, MouseEvent | KeyboardEvent> = (event) => {
        ref.showModal();
    };

    return (
        <div class="d-flex flex-column title-screen primary-bg">
            <div class="main title">Ridge Racer Type 4</div>
            <div class="content">
                <button
                    onClick={handleInput}
                    onKeyUp={(e) => {
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