import React from 'react';
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub , faTelegram} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
function Footer(props) {
 
    const githubicon = <FontAwesomeIcon icon={faGithub} />
    const emailicon = <FontAwesomeIcon icon ={faEnvelope}/>
    const TelegramIcon = <FontAwesomeIcon icon={faTelegram}/>
    return (
        

            <div className="row d-flex justify-content-center align-content-center" 
            style={{'width':'100%','minHeight':'80px'}}>
                  <br/>
                            <br/>
                <div className="col text-white text-center font-weight-bolder ">
    {/* <a className="mr-2 text-white" href="https://github.com/Aashiq-Otp"> {githubicon} </a>  
    <a className="ml-1 mr-2 text-white" href="mailto:Aashiqotp.as@gmail.com">{emailicon}</a>
    <a className="ml-2 text-white" href="https://t.me/AashiqOtp">{TelegramIcon}</a> <br/> */}
                            {/* &copy; Binance Coin Analyzer <br/> */}
                          
                            AICT BOT

                </div>
            </div>
        
    );
}

export default Footer;