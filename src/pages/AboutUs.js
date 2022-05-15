import React from 'react';
import "../styles/AboutUs.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import img1 from '../images/coffee-g2cb39cea5_1920.jpg'

function AboutUs() {
    return (
        <div class='marginTop'>
        <a name="about"></a>
            <div class='flex'>
            <div>
                <img src={img1} alt="bookCup" class="rounded bookCup" />
            </div>
                <div>
                    <h1 className='brown h1Phone'>O nas</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil accusamus, blanditiis tenetur quasi enim sit earum eligendi dicta dolore maiores explicabo fugit modi repellat quam architecto id est amet minus.</p>
                </div>
            </div>
        </div>
        
    );
}


export default AboutUs
