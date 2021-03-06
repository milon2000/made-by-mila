import React from 'react';
import Translate from 'react-translate-component';

export default class extends React.Component {
  state = {
    name: '',
    email: '',
    message: ''
}

  render() {
	return (
		<div className="contact-component subpage">
            <form className="form-component" >
            <Translate component="input" type="text" name="name" id="name" onChange={this.handleChangeName}  attributes={{placeholder: 'contactForm.contactFormName'}}/>
            <Translate component="input" type="text" name="email" id="email" onChange={this.handleChangeEmail}  attributes={{placeholder: 'contactForm.contactFormEmail'}}/>
            <Translate component="textarea" type="text" name="message" id="message" onChange={this.handleChangeMessage} className="form-textarea"  attributes={{placeholder: 'contactForm.contactFormMessage'}}/>
            <Translate content="contactForm.contactFormButton" component="button" onClick={this.handleSubmit} className="button send-button"/>
            <p id="msg"></p>
            </form>
            <figure className="contact-image">
                
            </figure>
            </div>
  	
	)
  }

  handleChangeName = (e) => {
    this.setState({name: e.target.value});
  }
  handleChangeEmail = (e) => {
    this.setState({email: e.target.value});
  }
  handleChangeMessage = (e) => {
    this.setState({message: e.target.value});
  }
  handleSubmit = (e) => {
    e.preventDefault();
	const templateId = '';

  this.sendFeedback(templateId, {message_html: this.state.message, from_name: this.state.name, reply_to: this.state.email})
  console.log(this.state);
  this.setState({name: '', email: '', message: ''})
  }

  sendFeedback = (templateId, variables) =>{
	window.emailjs.send(
  	'gmail', templateId,
  	variables
  	).then(res => {
      document.getElementById("msg").innerHTML="Email successfully sent!"
    	
  	})
  	// Handle errors here however you like, or use a React error boundary
  	.catch(err => document.getElementById("msg").innerHTML="Oh well, you failed." )
  }

}