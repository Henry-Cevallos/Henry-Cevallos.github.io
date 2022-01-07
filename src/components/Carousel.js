import React, { useState } from 'react';
import '../styles/Carousel.css';
import {ArrowCircleLeft, ArrowCircleRight} from '@mui/icons-material';

const Carousel = ({images_array}) => {

    return (
        <div className='Carousel-start'>
            <div className='row'>

            <div className='col'>
                <ArrowCircleLeft />
            </div>

            <div className='col pictures' >
                pics
            </div>

            <div className='col'>
                <ArrowCircleRight />
            </div>

            </div>
        </div>
    )
}

export default Carousel;