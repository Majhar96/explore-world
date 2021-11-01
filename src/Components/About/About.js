import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../Images/About/about-1.jpg';
import banner2 from '../../Images/About/about-2.jpg';
import banner3 from '../../Images/About/about-3.jpg';
import './About.css'

const About = () => {

    // slide style
    const carouselsStyle = {
        width: '100%',
        marginTop: '30px',
        opacity: '.7',
        height: '70%'
    }

    //  image style
    const imageStyle = {
        width: '800px',
        height: '550px'

    }

    // carousel text style
    const textStyle = {
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'cursive'


    }

    return (
        <div>
            <Carousel style={carouselsStyle}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        style={imageStyle}
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption style={textStyle}>
                        <h1>Relaxing Place with lost in the nature</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        style={imageStyle}
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption style={textStyle}>
                        <h1>Thrilling travelling with safety</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        style={imageStyle}
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption style={textStyle}>
                        <h1>Cottege with full natural felling</h1>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <div className="aboutMessage">
                <h2>Explore-World</h2>
                <br />
                <h6>
                    We bring together travellers from all corners of the globe to discover new cultures and a little part of themselves along the way. Across 350+ global trips we sort out the stressful stuff like transport and accommodation, leaving you with unique travel experiences you wouldn’t be able to book on your own. Throughout your trip our expert Trip Managers and Local Guides use their local insights to help you discover an authentic side to the places you visit

                </h6><br /><br /><br />
                <h2>Mission</h2>
                <ul>
                    <li>Adhering to high ethical and moral standards at all times.</li>
                    <li>Making service quality top priority in all we do.</li>
                    <li>Training staff to work within a quality care environment.</li>
                    <li>Providing quality food service in all phases.</li>
                    <li>Delivering customer satisfaction through quality service</li>
                </ul>
            </div>
        </div>
    );
};

export default About;