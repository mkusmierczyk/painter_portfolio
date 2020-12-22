import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import Painting1 from '../assets/image0.jpg';
import Painting2 from '../assets/image1.jpg';
import Painting3 from '../assets/image2.jpg';
import Painting4 from '../assets/image3.jpg';
import Painting5 from '../assets/image4.jpg';


function SectionGallery() {

    const photos = [
        {
            src: Painting1,
            width: 1,
            height: 1,
            title: "opis",
        },
        {
            src: Painting2,
            width: 1,
            height: 1,
        },
        {
            src: Painting3,
            width: 1,
            height: 1,
        },
        {
            src: Painting4,
            width: 1,
            height: 1,
        },
        {
            src: Painting5,
            width: 1,
            height: 1,
        },
    

    ];

    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    return (
        <div>
            <Gallery photos={photos}  onClick={openLightbox}  />
            <ModalGateway>
                {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                        <Carousel
                            currentIndex={currentImage}
                            views={photos.map(x => ({
                                ...x,
                                srcset: x.srcSet,
                                caption: x.title
                            }))}
                        />
                    </Modal>
                ) : null}
            </ModalGateway>
        </div>
    );
}

export default SectionGallery;
