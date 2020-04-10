import React,{Component} from 'react';
import './landingScreen.css';
import logo from '../../../assets/images/logo.png';
// import twittericn from '../../../assets/images/twittericn.png';
// import facebookicn from '../../../assets/images/facebookicn.png';
// import linkedinicn from '../../../assets/images/linkedinIcn.png';

class LandingScreen2 extends Component {
    render() {
        return(
            <div className="landingScreen2">
                <div className="layer">
                    <div className="logo">
                        <img src={logo} className="logoImage" alt="Inovision-Technologies-logo" />
                    </div>
                    <div className="companyName">
                        INOVISION TECHNOLOGIES
                    </div>
                    <div className="companyMoto">
                        | INNOVATE YOUR VISION |
                    </div>
                    {/*<div className="social-media-links">*/}
                    {/*    <img src={linkedinicn} className="social-media-icons" alt="linkedin" />*/}
                    {/*    <span className='sizedBoxhorizontal'></span>*/}
                    {/*    <img src={facebookicn} className="social-media-icons" alt='facebook' />*/}
                    {/*    <span className='sizedBoxhorizontal'></span>*/}
                    {/*    <img src={twittericn} className="social-media-icons" alt='twitter'/>*/}
                    {/*</div>*/}
                </div>
            </div>
        )
    }
}

export default LandingScreen2;