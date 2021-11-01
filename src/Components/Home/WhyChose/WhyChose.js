import { faAnchor, faBabyCarriage, faTrain } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './WhyChose.css'

const WhyChose = () => {
    // fontawesome icon set
    const experience = <FontAwesomeIcon icon={faTrain} />
    const care = <FontAwesomeIcon icon={faBabyCarriage} />
    const top = <FontAwesomeIcon icon={faAnchor} />

    return (
        <div className="main-why mb-3 pt-5">
            <h2>Why Choose explore world?
            </h2>
            <div className="why-container">

                <div className="purpose-container">
                    <button className="button">{experience}</button>
                    <br />
                    <h3>More experience</h3>
                    <br />
                    <p>
                        Every year, more than a million people come to explore world for travelling. Our highly specialized experts are deeply experienced in decide to guide you.</p>
                </div>

                <div className="purpose-container">
                    <button className="button">{care}</button>
                    <h3>Seamless care</h3>
                    <br />
                    <p>
                        At explore world, every aspect of your care is coordinated and teams of experts work together to provide exactly the care you need. What might take months elsewhere can often be done in days here.</p>
                </div>

                <div className="purpose-container">
                    <button className="button">{top}</button>
                    <h3>Unparalleled Place</h3>
                    <br />
                    <p>This travell agency will guided you to  a nice travell place with safety and care.In addition to give you proper guide what to choose as your destination.</p>
                </div>
            </div>

        </div>
    );
};

export default WhyChose;