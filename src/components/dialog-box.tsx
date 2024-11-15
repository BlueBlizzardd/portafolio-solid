import { ParentComponent } from 'solid-js'
import '../styles/dialog-box.css'

type DialogBoxProps = {
    scope?: string,
    backgroundColor?: { '--dialog-bg': string },
}

export const DialogBox: ParentComponent<DialogBoxProps> = (props) => {
    return (
        <div class={props.scope ? `container ${props.scope}` : 'container'}>
            <div class="dialog-box" style={props.backgroundColor ?? undefined}>
                {props.children}
            </div>
        </div>
    )
}