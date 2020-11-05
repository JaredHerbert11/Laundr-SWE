import { Link } from 'react-router-dom'
import { Text } from "react-native";
import axios from 'axios'
import '../css/landingpage.css'

const LandingPage = (props) => {
    const colorArray = ["#ff5656", "#f4ea9c", "#5b5b5b", "#8dcfdd",  "#e2cea3", "#48c47e"]
    window.addEventListener('scroll', () => {
        const colorbar = document.querySelector('.color-bar')
        let secNumber = Math.floor(window.pageYOffset/window.innerHeight);
        console.log(secNumber);
        colorbar.style.backgroundColor = colorArray[secNumber];
    })

    return (
        <body>
            <div class="color-bar">
            </div>
            <section class="bg-image img1">
                <h1>Watermelon Cucumber</h1>
                <div class="mockup-image mimg1"></div>
            </section>
            <section class="bg-image img2">
                <h1>White Gardenia</h1>
                <div class="mockup-image mimg2"></div>
            </section>
            <section class="bg-image img3">
                <h1>Mahogany Teakwood</h1>
                <div class="mockup-image mimg3"></div>
            </section>
            <section class="bg-image img4">
                <h1>Fresh Air</h1>
                <Text>Test!</Text>
                <div class="mockup-image mimg4"></div>
            </section>
            <section class="bg-image img5">
                <h1>Coffee Vanilla</h1>
                <div class="mockup-image mimg5"></div>
            </section>
            <section class="bg-image img6">
                <h1>Eucalyptus Tea Tree</h1>
                <div class="mockup-image mimg6"></div>
            </section>
        </body>
    )
}

export default LandingPage;