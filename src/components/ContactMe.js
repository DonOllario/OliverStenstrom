import React from 'react'
import styled from 'styled-components';
import emailjs from 'emailjs-com';
import {
    AiFillPhone, 
    AiFillMail
} from 'react-icons/ai';

const ContactMeSection = styled.div`
    height: 100vh;
    width: 100%;
    position: relative;
    overflow: hidden;
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
`;



const ContactMeTitle = styled.div`
    height: 15%;
    text-align: center;
    margin-top: 6vw;
    color: white;
    background-color: black;
    h4{
        color: #14ffec;
        font-size: 3vw;
        margin: 0 0 15px;
    }
    h1{
        font-size: 4.5vw;
    }

    
`;

const ContactMeWrapper = styled.div`
    width: 80%;
    max-width: 1400px;
    height: 45%;
    border-radius: 15px;
    background-color: #212121;
    display: flex;
    padding: 20px;
    overflow: hidden;
    margin-top: 50px;
`;

const ContactMeInfo = styled.div`
    background-color: #14ffec;
    border-radius: 15px;
    color: black;
    padding: 4vw;
    flex: 0 1 40%;
    display: flex;
    flex-direction: column;

    h4{
        font-size: 2.6vw;
        font-weight: 500;
    }
    p{
        font-size: 1.3vw;
        margin: 10px 0 35px;
        width: 80%;
        color: #393e46;
    }
    
    .icon-text{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding: 2vw 0;
        span{
            font-size: 1.4vw;
            font-weight: 300;
        }
    }
    @media screen and (max-width: 768px) {
        width: 6rem;
        height: 100%;

    }
    @media screen and (max-height: 850px) {
        width: 6rem;
        height: 100%;
    }
`;
const ContactMeInfoPhone = styled(AiFillPhone)`
    font-size: 2.2vw;
    margin-right: 1.5vw;
    flex: 0 0 2vw;

`;

const ContactMeInfoMail = styled(AiFillMail)`
    font-size: 2.2vw;
    margin-right: 1.5vw;
    flex: 0 0 2vw;

`;

const ContactMeForm = styled.div`
    color: white;
    width: 100%;
    overflow-y: auto;
    form{
        padding: 1vw 4vw;

        .col {
            display: flex;
            width: 100%;
            flex: 0 0 100%;
        }

        .form-group{
            display: flex;
            justify-content: flex-start;
            flex-direction: column;
            flex: 0 1 100%;
            padding-right: 1vw;
            label{
                font-size: 1.5vw;
                margin-bottom: 1vw;
                color: rgba(255,255,255,.6);
            }
            input[type="text"], input[type="email"], textarea{
                
                border: none;
                padding: 0.25vw;
                font-size: 1.5vw;
                font-weight: 300;
                margin-bottom: 2vw;
                color: white;
                background:transparent;
                resize: none;
                border-bottom: 0.2vw solid rgba(255,255,255,.4);
                transition: .3s all ease-in-out;
                &:focus{
                    border: none;
                    outline: none;
                    border-bottom: 0.2vw solid #14ffec;
                    
                }
            }

            button{
                background: ${({ primary }) => (primary ? '#14ffec' : 'CD853F')};
                white-space: nowrap;
                outline: none;
                border: solid;
                border-color: #14ffec;
                border-radius: 25px;
                minwidth: 100px;
                max-width: 180px;
                cursor: pointer;
                text-decoration: none;
                transition: 0.3s;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: ${({big}) => (big ? '16px 40px' : '10px 12px')};
                color: ${({primary}) => (primary ? 'Black' : '#000d1a')};
                font-size: ${({big}) => (big ? '24vw' : '18px')};
                font-weight: 700;
                &:hover{
                    transform: translateY(-2px);
                    background-color: Black;
                    color: #14ffec;
                    border: solid;
                    border-color: #14ffec;
                }
            }
            &.right{
                align-items: flex-end;
                margin-top: 25px;
                *{
                    color: #212121;
                    background-color: #14ffec;
                }
                *:hover{
                    color: #14ffec;
                    background-color: #212121;
                }
            }
            
        }
        
    }
`;


const ContactMe = () => {

    function sendEmail(e){
        e.preventDefault();

    emailjs.sendForm('service_cki5ncd', 'template_wzx1xev', e.target, 'user_20A9VFFOcVD0HVuSUSOHH')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }

    return (
        <ContactMeSection>
            <ContactMeTitle>
                    <h4>get in touch</h4>
                    <h1>CONTACT</h1>
                </ContactMeTitle>
            <ContactMeWrapper>
                <ContactMeInfo>
                    <h4> Contact Information </h4>
                    <p>I'd love to hear from you! <br/> Feel free to send me a message and i'll reply as soon as i can.</p>
                    <div className="actual-info">
                    <div className="icon-text">
                        <ContactMeInfoPhone/>
                        <span>+46733498227</span>
                    </div>
                    <div className="icon-text">
                        <ContactMeInfoMail/>
                        <span>oliwwerr@gmail.com</span>
                    </div>
                </div>
                </ContactMeInfo>
                <ContactMeForm>
                <form onSubmit={sendEmail}>
                    <div className="col-2">
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" name="name"/>
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" name="email"/>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <label>Message</label>
                            <textarea rows="4" name="message"></textarea>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group right">
                            <button type="submit" value="Send">Send Message</button>
                        </div>
                    </div>
                </form>
                
                </ContactMeForm>
            </ContactMeWrapper>
        </ContactMeSection>
    )
}

export default ContactMe
