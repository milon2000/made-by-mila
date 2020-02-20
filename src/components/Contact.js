
import React from "react";


class Contact extends React.Component {
    state = {
        name: '',
        email: '',
        message: ''
    }
handleChange = (e) => {
    this.setState({
        [e.target.id]: e.target.value
    })
}

handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
}
    
    
    render() {
        return (
            <div className="contact-component subpage">
            <form className="form-component">
                <input name="name" id="name" onChange={this.handleChange} type="text" placeholder="Name"/>
                <input name="email" id="email" onChange={this.handleChange} type="email" placeholder="Email"/>
                <textarea name="message" id="message" onChange={this.handleChange} className="form-textarea" placeholder="Message"></textarea>
                <button onClick={this.handleSubmit} className="button send-button">
              Send
            </button>
            </form>
            <figure className="contact-image">
                
            </figure>
            </div>
        )
    }
}

export default Contact;