import { Component, createSignal } from 'solid-js'
import '../styles/typewriter.css'

type TypewriterProps = {
    sentences: Array<string>,
    onComplete: () => any
}

export const Typewriter: Component<TypewriterProps> = (props) => {
    const [sentence, setSentence] = createSignal<string>(props.sentences[0]);
    const [writing, setWriting] = createSignal<boolean>(true);

    let buttonRef: HTMLButtonElement;

    function handleInteraction() {
        buttonRef.click();
    }

    function handleClick() {
        if (!writing())
            nextSentence(props.sentences);

        setWriting(writing => !writing);
    }

    function nextSentence(sentences: Array<string>) {
        const current = sentences.indexOf(sentence());

        if (current === sentences.length - 1)
            return props.onComplete();

        return setSentence(sentences[current + 1]);
    }

    return (
        <div class='typewriter' onClick={handleInteraction} onKeyUp={(event) => { if (event.key === 'Enter') handleInteraction() }}>
            <div class={writing() ? `typewriter-text typewriter-animation` : `typewriter-text`} onAnimationEnd={() => setWriting(false)}>{sentence()}</div>
            <button class='next-button' onClick={() => handleClick()} autofocus>
                <div class="triangle"></div>
            </button>
        </div>
    )
} 