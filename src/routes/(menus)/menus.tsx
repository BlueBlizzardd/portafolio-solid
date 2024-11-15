import { ParentComponent } from "solid-js"
import '../../styles/menus.css'

export const Menu: ParentComponent = (props) => {
    return (
        <div class="d-flex flex-column menu primary-bg">
            <header class="heading">
                <span class='mode title'>Mode: {location.pathname}</span>
                <div class="separator"></div>
            </header>
            {props.children}
            <footer class="footer">
                <div class="separator"></div>
                <div class="d-flex controls">
                    <div class="control title">Directional Buttons: Arrows</div>
                    <div class="control title">Enter Button: O.K.</div>
                    <div class="control title">Esc Button: Cancel</div>
                    <div class="control title">Please</div>
                </div>
            </footer>
        </div>
    )
}