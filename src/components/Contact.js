import React from "react";

class Contact extends React.Component {
    render() {
        return (
            <div className="contact-component">
            <form className="form-component">
                <input name="name" type="text" placeholder="Name"/>
                <input name="email" type="email" placeholder="Email"/>
                <textarea name="message" className="form-textarea" placeholder="Message"></textarea>
            </form>
            <figure className="contact-image">
                
            </figure>
            </div>
        )
    }
}

export default Contact;