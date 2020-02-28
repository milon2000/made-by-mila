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
                    <p>I believe that simplicity is one of the golden rules in everything, web design included. The user should have an enjoyable, positive experience when using your website, no matter what she or he is doing: reading, watching a video, or listening to music. Every action should be clear and easy to understand. And this is exactly what I do: I highlight your company strengths and easily present the services you offer with a simple, modern and minimalistic design.</p>
                    
                    <p>The website development process starts with a conversation in which I try to understand what you need and offer you something that meets your expectations. You may need a static website (simple website with information about your company, without a blog and no need to add new content) or a more complicated CMS system, like WordPress. Then, we start a design process: we sketch layouts, site-maps, and menu structure. After that, I will present you with a variety of different layouts to receive feedback from you about what you like and what shows the concepts of your company in the best way. We will work together closely on every step of the project to be sure that this is exactly what you need.</p>
                    <h3 className="title-subpage">What exactly do I offer?</h3>

                    <h4 className="title-subpage">Pre-Purchased WordPress Theme</h4>

                    <p>This kind of theme is perfect for websites on a tight budget or deadline. It’s a ready to use design and ready to integrate it with WP CMS right away. You can make some small changes, like changing colors, adding logo and images, but if you are looking for something tailor-made, a better choice is a Custom WordPress Theme.</p>
                    <h4 className="title-subpage">Custom WordPress theme</h4>

                    <p>If you are looking for something tailor-made, choose this option. I create a WordPress theme from scratch. The development will take time, but the website will be exactly what you need.</p>
                    <h4 className="title-subpage">Static website</h4>

                    <p>This is an option for you if you are not planning to add new content to your website, for example, blog posts. This kind of website is intended to inform your audience of what type of business you do.</p>
                    <h4 className="title-subpage">WordPress Training and Tutoring</h4>

                    <p>I offer WordPress training to teach you and your team how to updating, maintaining and adding content to your existing WordPress website.</p>
                    
                </section>
                <Contact/>
                <Footer/>
            </div>
        )
    }
}

export default Together;