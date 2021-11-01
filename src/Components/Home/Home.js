import React from 'react';
import Services from '../Services/Services';
import Banner from './Banner/Banner';
import Safety from './Safety/Safety';
import WhyChose from './WhyChose/WhyChose';

const Home = () => {
    return (
        <div>

            {/*Banner part */}
            <div>
                <Banner></Banner>
            </div>

            {/* why chose us part */}
            <div>
                <WhyChose></WhyChose>
            </div>


            {/* services part */}
            <div>
                <Services></Services>
            </div>

            {/* covid 19 part */}
            <div>
                <Safety></Safety>
            </div>

        </div>
    );
};

export default Home;