import React, {Component} from 'react';
import './homePage.css';
// import LandingScreen from "./landing-screen/landingScreen";
import FeatureScreen from "./services-features/featuresScreen"
import LandingScreen2 from "./landing-screen2/landingScreen";
import ContactScreen from "./contact-screen/contactScreen";

class homePage extends Component {
    render() {
        return (
            <div className="homePage">
                <LandingScreen2 />
                <FeatureScreen />
                <ContactScreen />
            </div>
        );
    }
}

export default homePage;