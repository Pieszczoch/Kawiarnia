import React from 'react';
import "../styles/Offer.css";
import 'bootstrap/dist/css/bootstrap.min.css';


import imgo1 from '../images/coffee-gc1d0cbcb2_1920.jpg'
import imgo2 from '../images/coffe-grains-gbcc72b9db_1920.jpg'
import imgo3 from '../images/pancakes-g050b113c5_1920.jpg'


function Offer() {
    return (
    <div>
        <a name="offer"></a>
        <h1 className='brown text'>Oferta</h1>
        <div class='flex'>
            <div class="itemOffer">
                <img src={imgo1} alt="" className='rounded offer'/>
                <h3>Wyśmienite kawy</h3>
            </div>
            <div class="itemOffer">
                <img src={imgo2} alt="" className='rounded offer'/>
                <h3>Ziarna na wynos</h3>
            </div>
            <div class="itemOffer">
                <img src={imgo3} alt="" className='rounded offer'/>
                <h3>Ciasta jak domowe</h3>
            </div>
            </div>
    </div>
    );
}

export default Offer;