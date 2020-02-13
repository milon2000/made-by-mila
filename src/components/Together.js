import React from "react";
import Menu from "./Menu";
import Contact from "./Contact";
import Footer from "./Footer";

class Together extends React.Component {
    render() {
        return (
            <div className="together-component">
                <Menu/>
                <section className="together-section subpage">
                    <h2 className="title title-subpage">Let's work together</h2>
                    <p>I believe that simplicity is one of the golden rules in everything, also in web design. The user should have an enjoyable, positive experience when using your website. No matter what he is doing: reading, watching a video, or listening to music: every action should be clear and understandable. And this is what I exactly do: I am showing your company strengths and easily present what services do you offer with a simple, modern and minimalistic design.</p>
                    
                    <p>The website development process starts with a conversation when I am trying to understand what do you need and offer you something that meets your expectations. You can need a static website (simple website with information about your company, without a blog and need to add new content) or a more complicated CMS system, like WordPress. Then, we start a design process: we sketch layouts, site-maps, and menu structure. And after that, I will present you with a variety of different layouts to receive feedback from you: what do you like and what in the best way shows concepts of your company. We will work together tightly on every step of the project to be sure that this is exactly what you need. </p>
                    <h3 className="title-subpage">What exactly do I offer?</h3>
                    <h4 className="title-subpage">Pre-Purchased WordPress Theme</h4>
                    <p>That kind of theme is perfect for websites on a tight budget or deadline. It's ready to use design, and it's ready to integrate it with WP CMS right away. You can make some small changes, likes changing colors, adding logo and images, but if you are looking for something tailor-made, a better choice is Custom WordPress Theme.</p>
                    <h4 className="title-subpage">Custom WordPress theme</h4>
                    <p>If you are looking for something tailor-made, choose this option. I create a WordPress theme from scratch. The development will take time, but the website will be exactly what you need.</p>
                    <h4 className="title-subpage">Static website</h4>
                    <p>This is an option for you if you are not planning to add new content to your website, for example, blog posts. This kind of website is intended to inform your audience of what type of business you do.</p>
                    <h4 className="title-subpage">WordPress Training and Tutoring</h4>
                    <p>I offer WordPress training to teach you and your team how to updating, maintaining and adding content to your existing WordPress website.</p>
                    <h4 className="title-subpage">Web applications</h4>
                </section>
                <Contact/>
                <Footer/>
            </div>
        )
    }
}

export default Together;