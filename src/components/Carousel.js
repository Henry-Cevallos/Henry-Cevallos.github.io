import React, { useState } from 'react';
import '../styles/Carousel.css';
import {ArrowCircleLeft, ArrowCircleRight} from '@mui/icons-material';
import Circle from './Circle';

const Carousel = ({images_array, headings}) => {

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

            <div className='col arrow' onClick={() => decreaseIndex()}>
                <ArrowCircleLeft />
            </div>

            <div className='col pictures'style={{/*backgroundImage: `url(${images_array[image_index]})`*/}} >  
                <img src={images_array[image_index]} alt='hobby' />
                <div className='caption'>
                    <div>{headings[image_index]}</div>
                </div>           
            </div>

            <div className='col arrow'  onClick={() => increaseIndex()}>
                <ArrowCircleRight />
            </div>

            </div>

            <Circle enabled={true} />
            <Circle enabled={false} />
        </div>
    )
}

export default Carousel;