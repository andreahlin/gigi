import React from 'react'
import './Arrow.css'
import './ImageGallery.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import 'photoswipe/dist/photoswipe.css'
import {
    IMG_1, IMG_2, IMG_3, IMG_4, IMG_5, IMG_6, IMG_7, IMG_8, IMG_9, IMG_10,
    IMG_12, IMG_13, IMG_14, IMG_15, IMG_16, IMG_17, IMG_18, IMG_19, IMG_20,
    IMG_21, IMG_22, IMG_23, IMG_24, IMG_25, IMG_26, IMG_27, IMG_28, IMG_29, 
    IMG_30, IMG_A
} from '../MediaUtil'

export default function ImageGallery() {
    const data = [
        {
            src: IMG_1,
            width: '1034',
            height: '834',
            caption: 'palm study | colored pencil'
        },
        {
            src: IMG_2,
            width: '2217',
            height: '2730',
            caption: 'study of Jeremiah Lamenting the Destruction of Jerusalem (Rembrandt) | oil on linen'
        },
        {
            src: IMG_3,
            width: '2880',
            height: '3593',
            caption: '15-minute figure study | graphite'
        },
        {
            src: IMG_4,
            width: '1995',
            height: '2333',
            caption: 'portrait study | oil on linen'
        },
        {
            src: IMG_5,
            width: '2681',
            height: '3737',
            caption: '20-minute study | graphite'
        },
        {
            src: IMG_6,
            width: '2963',
            height: '2112',
            caption: 'garlic | oil'
        },
        {
            src: IMG_7,
            width: '3300',
            height: '5100',
            caption: 'study of Pygmalion and Galatea (Gérôme) | digital painting'
        },
        {
            src: IMG_8,
            width: '2097',
            height: '2813',
            caption: 'sketch of Vincent van Gogh (Toulouse-Lautrec) | colored pencil'
        },
        {
            src: IMG_9,
            width: '2113',
            height: '2851',
            caption: 'sketch of Johannessen Head of a Girl (Nourse) | graphite'
        },
        {
            src: IMG_10,
            width: '3264',
            height: '2163',
            caption: 'Utah landscape | graphite'
        },
        {
            src: IMG_12,
            width: '2389',
            height: '3383',
            caption: 'St. Lawrence | graphite'
        },
        {
            src: IMG_A,
            width: '2563',
            height: '2869',
            caption: 'leg study | oil'
        },
        {
            src: IMG_13,
            width: '2670',
            height: '2919',
            caption: 'seated figure | graphite'
        },
        {
            src: IMG_14,
            width: '2185',
            height: '2936',
            caption: 'art nouveau | graphite'
        },
        {
            src: IMG_15,
            width: '3664',
            height: '2542',
            caption: 'winter | colored pencil and graphite'
        },
        {
            src: IMG_16,
            width: '826',
            height: '908',
            caption: 'self portrait | colored pencil'
        },
        {
            src: IMG_17,
            width: '2160',
            height: '2941',
            caption: 'seated figure | pastel'
        },
        {
            src: IMG_18,
            width: '1956',
            height: '2666',
            caption: 'persimmon study | oil + graphite'
        },
        {
            src: IMG_19,
            width: '2970',
            height: '3190',
            caption: '15-minute figure study | graphite'
        },
        {
            src: IMG_20,
            width: '1957',
            height: '2930',
            caption: 'birkenstock | graphite'
        },
        {
            src: IMG_21,
            width: '2601',
            height: '3513',
            caption: 'sketch of Bather Stepping into a Tub (Degas) | graphite'
        },
        {
            src: IMG_22,
            width: '4032',
            height: '3024',
            caption: 'seated gesture | graphite'
        },
        {
            src: IMG_23,
            width: '1608',
            height: '1425',
            caption: 'apple | oil'
        },
        {
            src: IMG_24,
            width: '2729',
            height: '2174',
            caption: 'at the salt lake airport | graphite'
        },
        {
            src: IMG_25,
            width: '2876',
            height: '3909',
            caption: 'sketch of Man on a Diving Board (Johannessen) | graphite'
        },
        {
            src: IMG_26,
            width: '1448',
            height: '2617',
            caption: 'grace | pastel'
        },
        {
            src: IMG_27,
            width: '2700',
            height: '3766',
            caption: 'self portrait | pastel'
        },
        {
            src: IMG_28,
            width: '2266',
            height: '3048',
            caption: 'in movement | pastel'
        },
        {
            src: IMG_29,
            width: '3385',
            height: '2531',
            caption: 'hand study | oil'
        },
        {
            src: IMG_30,
            width: '2161',
            height: '2899',
            caption: 'seated figure | charcoal and pastel'
        }
    ]

    return (
        <div className='gallery-container'>
            <Gallery withCaption>
                {data.map((image) => (
                    <Item key= {image.src} original={image.src} width={image.width} height={image.height}
                        caption={image.caption} >
                        {({ ref, open }) => (
                            <div className='responsive'>
                                <div className='square'
                                    style={{ backgroundImage: `url(${image.src})` }}
                                    ref={ref} onClick={open} >
                                </div> </div>
                        )}
                    </Item>
                ))}
            </Gallery>
        </div>
    )
}
