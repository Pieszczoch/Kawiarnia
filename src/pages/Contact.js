import React from 'react';
import "../styles/Contact.css";


import imgc1 from '../images/map-locator.png'
import imgc2 from '../images/call_black.svg'
import imgc3 from '../images/markunread_black.svg'


function Contact() {
    return (
        <div>
        <a name="contact"></a>
            <h1 className='brown text'>Kontakt</h1>
            <div class="flex">
                <div>
                    <table style={{width:'60%'}}>
                        <tr>
                            <td><img src={imgc1} alt=""/></td>
                            <td>ul. Zimowit 42, 35-605 Rzeszów</td>
                        </tr>
                        <tr>
                            <td><img src={imgc2} alt=""/></td>
                            <td>+48 506 900 590</td>
                        </tr>
                        <tr>
                            <td><img src={imgc3} alt="" /></td>
                            <td>office@tituto.com</td>
                        </tr>
                    </table>
                </div>
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2564.41939942749!2d22.016577615715217!3d50.003493879416155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473cfa146f814c69%3A0x7f96b305a069712f!2sZimowit%2042%2C%2035-605%20Rzesz%C3%B3w!5e0!3m2!1sen!2spl!4v1652630192318!5m2!1sen!2spl" className="maps"></iframe>
                </div>
            </div>
        </div>
    )
}

export default Contact

