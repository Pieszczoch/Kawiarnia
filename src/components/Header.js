import React from 'react';
import "../styles/Header.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components'


function Header() {
    return (
        <div>
            <figure className='position-relative'>
                <MainContainer/>
                <figcaption>
                    Kawiarnia u gabrysi
                </figcaption>
            </figure>
        </div>
    );
}

const MainContainer = styled.header`
 background: url(../images/coffee-g741ef407d_1920.jpg) no-repeat center/cover;
 height: 35rem;
 -webkit-box-shadow: inset 0px 0px 100px 100px rgba(0, 0, 0, 1);
 -moz-box-shadow: inset 0px 0px 100px 100px rgba(0, 0, 0, 1);
 box-shadow: inset 0px 0px 100px 100px rgba(0, 0, 0, 1);
 border-top: 1px solid #7D7D7D;

 @media (max-width:500px) {
     border-top: none
 }
`
export default Header

