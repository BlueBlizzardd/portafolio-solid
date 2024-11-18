import { Component, createMemo } from 'solid-js'
import { A, useParams } from '@solidjs/router';
import { DialogBox } from '../../components/dialog-box';
import { TextBox } from '../../components/text-box';
import { MenuItem } from '../../components/menu-item';
import { PageContents, pageNames, Pages } from '../../types/pages';
import '../../styles/garage.css'

export const Garage: Component = () => {
    const params = useParams<{ page: Pages }>();
    const pageID = createMemo(() => pageNames.indexOf(params.page));

    const pages: PageContents = new Map([
        ['cafe', { page: "https://kaleidoscopic-taffy-300230.netlify.app", image: 'https://imgur.com/t4NJ9CC.png' }],
        ['cloth', { page: "https://gregarious-semolina-4e434b.netlify.app", image: 'https://imgur.com/zlYWbPM.png' }],
        ['game', { page: "https://whimsical-pika-d83faa.netlify.app", image: 'https://imgur.com/ob6Mhn1.png' }],
        ['mac', { page: "https://github.com/BlueBlizzardd/Landing-Page-1-Multimedia", image: 'https://imgur.com/HmyYLCL.png' }],
        ['ow', { page: "https://github.com/BlueBlizzardd/Website--1-Multimedia", image: 'https://imgur.com/OIwhAPe.png' }],
        ['pets', { page: "https://curious-concha-d8e4c1.netlify.app", image: 'https://imgur.com/otFgLfs.png' }],
        ['salon', { page: "https://peaceful-chaja-823c96.netlify.app", image: 'https://imgur.com/LYBEdOd.png' }],
        ['pronto', { page: "https://prontopizzacantaclaro.netlify.app/home", image: 'https://imgur.com/gAZ3oDu.png' }]
    ]);

    return (
        <DialogBox scope='garage' backgroundColor={{ '--dialog-bg': 'darkslategrey' }}>
            <div class="d-flex garage-options">
                <div class='garage-links'>
                    <a href={`${pages.get(params.page)?.page}`}>
                        <MenuItem title='O.K' />
                    </a>
                    <A href='/'>
                        <MenuItem title='Exit' />
                    </A>
                </div>
                <div class="d-flex garage-navigation">
                    <A
                        href={`/garage/${pageNames[(pageID() - 1 + pageNames.length) % pageNames.length]}`}
                        on:keyup={event => {
                            if (event.key === 'ArrowLeft')
                                event.currentTarget.click();
                        }}
                        class='arrow'>
                    </A>
                    <div class="divider"></div>
                    <A
                        href={`/garage/${pageNames[(pageID() + 1) % pageNames.length]}`}
                        on:keyup={(event) => {
                            if (event.key === 'ArrowRight')
                                event.currentTarget.click();
                        }}
                        class='arrow'>
                    </A>
                </div>
            </div>
            <img src={pages.get(params.page)?.image} />
            <TextBox title='Car data'>
                <table class="title img-info">
                    <tbody>
                        <tr>
                            <td data-label="Maker name">Eduardo [VE]</td>
                            <td data-label="Car name">{params.page.toUpperCase()}</td>
                            <td data-label="Stage">01</td>
                        </tr>
                        <tr>
                            <td data-label="Team name">None</td>
                            <td data-label="Max speed">{`10${pageID()}`} mPH</td>
                            <td data-label="Type">Drift</td>
                        </tr>
                    </tbody>
                </table>
            </TextBox>
        </DialogBox>
    )
}