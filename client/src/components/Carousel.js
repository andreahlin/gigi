import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import { ZINE_TITLE, ZINE_1, ZINE_2, ZINE_3, ZINE_4, ZINE_5, 
    ZINE_6, ZINE_7A, ZINE_7B, ZINE_8, ZINE_9, ZINE_10, ZINE_11, 
    ZINE_12, ZINE_13, ZINE_14, ZINE_16 } from '../MediaUtil'
import '../pages/Global.css'
import './Carousel.css'

export default function Carousel() {
    const handleDragStart = (e) => e.preventDefault();

    const responsive = {
        800: { items: 1, itemsFit: 'contain' },
        1024: { items: 2, itemsFit: 'contain' },
    };
    const items = [
        <img className="zine-image" alt="drawing of rodin's the thinker" src={ZINE_TITLE} width='400' onDragStart={handleDragStart} role='presentation' />,
        <img className="zine-image" alt='drawing of a cafe part 1' src={ZINE_1} width='400' onDragStart={handleDragStart} role='presentation' />,
        <img className="zine-image" alt='drawing of a cafe part 2' src={ZINE_2} width='400' onDragStart={handleDragStart} role='presentation' />,
        <img className="zine-image" alt='drawing of two people sitting on a roof' src={ZINE_3} width='400' onDragStart={handleDragStart} role='presentation' />,
        <img className="zine-image" alt='drawing of a person looking at a bridge' src={ZINE_4} width='400' onDragStart={handleDragStart} role='presentation' />,
        <img className="zine-image" alt='drawing of various items' src={ZINE_5} width='400' onDragStart={handleDragStart} role='presentation' />,
        <img className="zine-image" alt='drawing of people sitting at a bar' src={ZINE_6} width='400' onDragStart={handleDragStart} role='presentation' />,
        <img className="zine-image" alt='drawing of the met part 1' src={ZINE_7A} width='400' onDragStart={handleDragStart} role='presentation' />,
        <img className="zine-image" alt='drawing of the met part 2' src={ZINE_7B} width='400' onDragStart={handleDragStart} role='presentation' />,
        <img className="zine-image" alt='drawing of cafe pastries' src={ZINE_8} width='400' onDragStart={handleDragStart} role='presentation' />,
        <img className="zine-image" alt='drawing of two people walking down a path' src={ZINE_9} width='400' onDragStart={handleDragStart} role='presentation' />,
        <img className="zine-image" alt='drawing of two people looking out on a street' src={ZINE_10} width='400' onDragStart={handleDragStart} role='presentation' />,
        <img className="zine-image" alt='drawing of a brooklyn street corner' src={ZINE_11} width='400' onDragStart={handleDragStart} role='presentation' />,
        <img className="zine-image" alt='drawing of prospect park tunnel' src={ZINE_12} width='400' onDragStart={handleDragStart} role='presentation' />,
        <img className="zine-image" alt='drawing of two sculptures' src={ZINE_13} width='400' onDragStart={handleDragStart} role='presentation' />,
        <img className="zine-image" alt="drawing of matisse's dancers" src={ZINE_14} width='400' onDragStart={handleDragStart} role='presentation' />,
        <img className="zine-image" alt='back page of zine with signature and logo' src={ZINE_16} width='400' onDragStart={handleDragStart} role='presentation' />

    ];

    return (
        <div className='carousel-container'>
            <AliceCarousel
                mouseTracking items={items}
                controlsStrategy='alternate'
                infinite={true}
                responsive={responsive}
            />
        </div>
    );
}