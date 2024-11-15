import { Component } from 'solid-js'
import { A, useParams } from '@solidjs/router';
import { DialogBox } from '../../components/dialog-box';
import { TextBox } from '../../components/text-box';
import { MenuItem } from '../../components/menu-item';
import { pageNames, Pages, PageURLs } from '../../types/pages';
import '../../styles/garage.css'

export const Garage: Component = () => {
    const { page }: { page: Pages } = useParams();
    const pageID = pageNames.indexOf(page);
    const img: string = `/${page}.png`;

    const pages: PageURLs = {
        cafe: "https://kaleidoscopic-taffy-300230.netlify.app",
        cloth: "https://gregarious-semolina-4e434b.netlify.app",
        game: "https://whimsical-pika-d83faa.netlify.app",
        mac: "https://github.com/BlueBlizzardd/Landing-Page-1-Multimedia",
        ow: "https://github.com/BlueBlizzardd/Website--1-Multimedia",
        pets: "https://curious-concha-d8e4c1.netlify.app",
        salon: "https://peaceful-chaja-823c96.netlify.app",
        pronto: "https://prontopizzacantaclaro.netlify.app/home"
    }

    return (
        <DialogBox scope='garage' backgroundColor={{ '--dialog-bg': 'darkslategrey' }}>
            <div class="d-flex garage-options">
                <div class='garage-links'>
                    <a href={`${pages[page]}`}>
                        <MenuItem title='O.K' />
                    </a>
                    <A href='/'>
                        <MenuItem title='Exit' />
                    </A>
                </div>
                <div class="d-flex garage-navigation">
                    <A
                        href={`/garage/${pageNames.at(pageID - 1)}`}
                        on:keyup={event => {
                            if (event.key === 'ArrowLeft')
                                event.currentTarget.click();
                        }}
                        class='arrow'>
                    </A>
                    <div class="divider"></div>
                    <A
                        href={`/garage/${pageNames.at(pageID + 1)}`}
                        on:keyup={(event) => {
                            if (event.key === 'ArrowRight')
                                event.currentTarget.click();
                        }}
                        class='arrow'>
                    </A>
                </div>
            </div>
            <img src={img} />
            <TextBox title='Car data'>
                <table class="title img-info">
                    <tbody>
                        <tr>
                            <td data-label="Maker name">Eduardo [VE]</td>
                            <td data-label="Car name">{page.toUpperCase()}</td>
                            <td data-label="Stage">01</td>
                        </tr>
                        <tr>
                            <td data-label="Team name">None</td>
                            <td data-label="Max speed">{`10${pageID}`} mPH</td>
                            <td data-label="Type">Drift</td>
                        </tr>
                    </tbody>
                </table>
            </TextBox>
        </DialogBox>
    )
}