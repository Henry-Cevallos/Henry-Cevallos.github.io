import React, { useState } from 'react';
import '../styles/Carousel.css';
import {ArrowCircleLeft, ArrowCircleRight} from '@mui/icons-material';

const Carousel = ({images_array}) => {

    const [image_index, Setimage_index] = useState(0);

    const increaseIndex = () => {

        if(image_index < images_array.length - 1)
            Setimage_index(image_index+1);
    }

    const decreaseIndex = () => {
        if(image_index !== 0)
            Setimage_index(image_index-1);
    }
    return (
        <div className='Carousel-start'>
            <div className='row'>

            <div className='col' onClick={() => decreaseIndex()}>
                <ArrowCircleLeft />
            </div>

            <div className='col pictures'style={{backgroundImage: `url(${images_array[image_index]})`}} >
                {image_index}
            </div>

            <div className='col'  onClick={() => increaseIndex()}>
                <ArrowCircleRight />
            </div>

            </div>
        </div>
    )
}

export default Carousel;