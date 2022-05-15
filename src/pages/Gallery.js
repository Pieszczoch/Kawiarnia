import React from 'react';
import "../styles/Gallery.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ModalImage from "react-modal-image";

import imgg1 from '../images/coffee-g8e6326781_1920.jpg'
import imgg2 from '../images/coffee-gc1d0cbcb2_1920.jpg'
import imgg3 from '../images/cake-gf019ffda1_1920.jpg'
import imgg4 from '../images/coffee-g1d05741af_1920.jpg'

function Gallery() {
    return (
    <div>
        <a name="gallery"></a>
        <h1 className='brown text'>Galeria</h1>
        <div class='flex'>
            <div class="itemGallery">
                <ModalImage
                    small={imgg1}
                    large={imgg1}
                    alt=""
                    hideDownload={true}
                    hideZoom={true}
                    className="rounded gallery modal-image"
                />
            </div>
            <div class="itemGallery">
                <ModalImage
                    small={imgg2}
                    large={imgg2}
                    alt=""
                    hideDownload={true}
                    hideZoom={true}
                    className="rounded gallery modal-image"
                />
            </div>
            <div class="itemGallery">
                <ModalImage
                    small={imgg3}
                    large={imgg3}
                    alt=""
                    hideDownload={true}
                    hideZoom={true}
                    className="rounded gallery modal-image"
                />
            </div>
            <div class="itemGallery">
                <ModalImage
                    small={imgg4}
                    large={imgg4}
                    alt=""
                    hideDownload={true}
                    hideZoom={true}
                    className="rounded gallery modal-image"
                />
            </div>
        </div>
    </div>
    )
}

export default Gallery