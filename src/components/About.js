import React from "react";
import Footer from "./Footer";
import Contact from "./Contact";
import Menu from "./Menu";
import { Link } from 'react-router-dom';

class About extends React.Component {
    render() {
        return (
            <div className="about-component">
                <Menu/>
                <section className="about-section subpage">
                    <h2 className="title title-subpage">Just a few words about me...</h2>
                    <p>Hi, my name is Mila, and I live in Kongsberg, Norway. By trade, I am a polish philologist, but I've never worked in my profession. It turned out that I follow py passion from the beginning.  For a few years, I worked as a sommelier, then as a manager, and then, I started my own business related to wedding photography and videography. But all the time, I was very close to programming: during my studies, I've learned how to create websites and created one. As a manager, I was responsible for website maintenance. For my own business, I also created a website. And then another one, better, then I discovered WordPress, JavaScript, and that was it! After almost seven years as a photographer, I've decided to change something! We (my and my family) moved to Norway, and I become a frontend developer. I am working as forntend developer since two years.  If you want to check my tech stack, <Link to="/technologies">check here</Link>. If you are interested in what projects I worked on, <Link to="/projects">visit this place</Link>. And if you are want to know something more, feel free to contact me. You can write in Polish, English and Norwegian, but for better understanding,  don't choose Norwegian for the phone call :) I still need some practice in speaking and understanding Norwegian people.</p>
                </section>
                <Contact/>
                <Footer/>
            </div>
        )
    }
}

export default About;