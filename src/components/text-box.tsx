import { ParentComponent } from 'solid-js'
import '../styles/text-box.css'

type TextBoxProps = {
    title: string,
}

export const TextBox: ParentComponent<TextBoxProps> = (props) => {
    return (
        <div class="message">
            <div class="title text-box-title">{props.title}</div>
            {props.children}
        </div>
    )

}