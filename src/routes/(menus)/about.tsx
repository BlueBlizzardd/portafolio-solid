import { Component } from 'solid-js'
import { useNavigate } from '@solidjs/router';
import { DialogBox } from '../../components/dialog-box';
import { TextBox } from '../../components/text-box';
import { Typewriter } from '../../components/typewriter';
import '../../styles/about.css'

export const About: Component = () => {
    const navigate = useNavigate();
    const sentences = ["Hello, I'm Eduardo.", "This is a website made to explore all of my capabilities in web design and development",
        "something I've been doing for about a year and a half at this point."];

    return (
        <DialogBox scope='about'>
            <div class="about-image"></div>
            <TextBox title='Message'>
                <Typewriter sentences={sentences} onComplete={() => navigate('/')}></Typewriter>
            </TextBox>
        </DialogBox>
    )
}