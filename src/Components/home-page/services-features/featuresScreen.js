import React,{Component} from 'react';
import './featuresScreen.css';
import missionImg from '../../../assets/images/missionimg.png';
// import visionImg from '../../../assets/images/visonimg.jpg';
import seoImg from '../../../assets/images/seo.png';
import iotImg from '../../../assets/images/yiot.png';
import webImg from '../../../assets/images/ywebdev.png';
import mobileImg from '../../../assets/images/ymobdev.png';

class FeatureScreen extends Component {
    render() {
        return(
            <div className="featureScreen">
                {/*<div className="heading1">*/}
                {/*    ABOUT US*/}
                {/*</div>*/}
                {/*<div className="aboutus">*/}
                {/*    We believe in giving equal opportunities to all*/}
                {/*    business whether big or small, in terms of technology*/}
                {/*    accessibility. We help small business who*/}
                {/*    usually can't afford the high cost & complicacy of*/}
                {/*    having an online presence, besides improving big businesses*/}
                {/*    over their competitors.*/}
                {/*</div>*/}
                {/*<div className="heading2">*/}
                {/*    SERVICES OFFERED*/}
                {/*</div>*/}
                {/*<div className="services">*/}
                {/*    <li>Websites</li>*/}
                {/*    <li>Cross-Platform Mobile Apps</li>*/}
                {/*</div>*/}
                {/*<div className="missionContainer">*/}
                    <div className="missionText">
                        <div className="ourmission">Our Mission</div>
                        <div className="moto">
                            <div className="large">I</div>
                            <div className="small">NNOVATE  </div>
                            <div className="large">Y</div>
                            <div className="small">OUR  </div>
                            <div className="large">V</div>
                            <div className="small">ISION</div>
                        </div>
                        <div className="missiondesc">
                            Business without vision is like life without soul.
                            It gives your business a clear focus and direction.
                            We at Inovision Technologies help bring innovation to your vision.
                            We believe in creating simple, cost effective and easily
                            accessible technology for complex and wide range uses thereby
                            giving equal opportunities to all businesses both big and small,
                            and helping them grow as we do.
                        </div>
                    </div>
                    <div className="missionImage">
                        <img className="imgmission" src={missionImg} alt="mission"/>
                    </div>
                {/*</div>*/}
                {/*<div className="visionImage">*/}
                {/*    <img className="imgvision" src={visionImg} alt="keyboard"/>*/}
                {/*</div>*/}
                {/*<div className="visionText">*/}
                {/*    <div className="ourvision">Our Vision</div>*/}
                {/*    <div className="visiondesc">*/}
                {/*        We believe in giving equal opportunities to all*/}
                {/*        business whether big or small, in terms of technology*/}
                {/*        accessibility. We help small business who*/}
                {/*        usually can't afford the high cost & complicacy of*/}
                {/*        having an online presence, besides improving big businesses*/}
                {/*        over their competitors.*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="visionText2">*/}
                {/*    <div className="ourvision">Our Vision</div>*/}
                {/*    <div className="visiondesc">*/}
                {/*        We believe in giving equal opportunities to all*/}
                {/*        business whether big or small, in terms of technology*/}
                {/*        accessibility. We help small business who*/}
                {/*        usually can't afford the high cost & complicacy of*/}
                {/*        having an online presence, besides improving big businesses*/}
                {/*        over their competitors.*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="visionImage2">*/}
                {/*    <img className="imgvision" src={visionImg} alt="keyboard"/>*/}
                {/*</div>*/}
                <div className="keyfeatures">
                    Key Services
                </div>
                <div className="servicesoffered">
                    <div className="col-1-disp">
                        <img src={mobileImg} className="mob-img" alt='mobile'/>
                        <div className="services-name">
                            Mobile App Development
                        </div>
                        <br/>
                        <div className="sizedBox"></div>
                        <img src={seoImg} className="service-img" alt='searchglass'/>
                        <div className="services-name">
                            Search Engine Optimization
                        </div>
                    </div>
                    <div className="col-2-disp">
                        <img src={webImg} className="service-img" alt='laptop'/>
                        <div className="services-name">
                            Web Development
                        </div>
                        <br/>
                        <div className="sizedBox"></div>
                        <img src={iotImg} className="service-img" alt='iot'/>
                        <div className="services-name">
                            Internet of Things
                        </div>
                    </div>
                    <div className="single-col-disp">
                        <div className="service-container">
                            <img src={mobileImg} className="mob-img" alt='mobile'/>
                            <div className="services-name">
                                Mobile App Development
                            </div>
                        </div>
                        <br/>
                        <div className="sizedBox2"></div>
                        <div className="service-container">
                            <img src={webImg} className="service-img" alt='laptop'/>
                            <div className="services-name">
                                Web Development
                            </div>
                        </div>
                        <br/>
                        <div className="sizedBox2"></div>
                        <div className="service-container">
                            <img src={seoImg} className="service-img" alt='searchglasses'/>
                            <div className="services-name">
                                Search Engine Optimization
                            </div>
                        </div>
                        <br/>
                        <div className="sizedBox2"></div>
                        <div className="service-container">
                            <img src={iotImg} className="service-img" alt='iot'/>
                            <div className="services-name">
                                Internet of Things
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FeatureScreen;