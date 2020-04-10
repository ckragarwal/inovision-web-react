import React,{Component} from 'react';
import './contactScreen.css';
import emailLogo from '../../../assets/images/emailIcon.png';
import axios from 'axios';

class ContactScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clientEmail: '',
            clientName: '',
            clientMessage: '',
        };
    }

    handleChange = e => {
        e.preventDefault();
        const {id, value} = e.target;
        this.setState({[id]: value});
    };


    onSubmitClick = () => {
        console.log(this.state.clientName,this.state.clientMessage,this.state.clientEmail);
        const details = {
            clientName: this.state.clientName,
            clientEmail: this.state.clientEmail,
            clientMessage: this.state.clientMessage,
        }
        var header = {
            "Access-Control-Allow-Origin": "*",
        }
        var url = 'https://us-central1-inovision-6a953.cloudfunctions.net/getInTouch';
        axios.post(url,details, {headers: header}).then(response => {
            // this.setState({
            //     clientName: '',
            //     clientMessage: '',
            //     clientEmail: '',
            // });
            if(response.data.code === 200) {
                document.getElementById('clientName').value = '';
                document.getElementById('clientEmail').value = '';
                document.getElementById('clientMessage').value = '';
                alert('Thanks for your message. We shall get in touch shortly.');
            }
            else {
                alert('Unable to send your message. Please try again.')
            }
        }).catch(e => {
            console.error(e);
        })
}

    render() {
        return(
            <div className="contactScreen">
                <div className="purpleLayer">
                    <div className="formContainer">
                        <div className="contactText">
                            Contact Us
                        </div>
                        <div className="contactForm">
                            <div className="name">
                                <label className="nameLabel">NAME :</label>
                                <br/>
                                <input type="text" id="clientName" className="nameInput" onChange={this.handleChange}/>
                                <p/>
                            </div>
                            <div className="email">
                                <label className="emailLabel">E-MAIL :</label>
                                <br/>
                                <input type="email" id="clientEmail" className="emailInput" onChange={this.handleChange}/>
                                <p/>
                            </div>
                            <div className="message">
                                <label className="messageLabel">MESSAGE : </label>
                                <br/>
                                <textarea id="clientMessage" className="messageInput" onChange={this.handleChange}/>
                                <p/>
                            </div>
                            <div className="submitbtncontainer">

                            </div>
                            <div className="submitbtn" onClick={this.onSubmitClick}>
                                SEND
                            </div>
                            <div className="seperator">
                                <div className="line1"></div>
                                <div className="or">OR</div>
                                <div className="line2"></div>
                            </div>
                            <div className="emailbtn">
                                <img src={emailLogo} className="emailLogo" alt="emaillogo" />
                            </div>
                            <div className="emailid">
                                contact@inovision.tech
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactScreen;
