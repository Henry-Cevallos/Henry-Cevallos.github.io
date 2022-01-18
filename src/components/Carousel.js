import React, { useState, useEffect } from 'react';
import '../styles/Carousel.css';
import {ArrowCircleLeft, ArrowCircleRight} from '@mui/icons-material';
import Circle from './Circle';

const Carousel = ({images_array, headings}) => {

    const [image_index, Setimage_index] = useState(0);

    const increaseIndex = () => {
            Setimage_index((image_index+1) % images_array.length);
    }

    const decreaseIndex = () => {

        if(image_index === 0){
            Setimage_index(images_array.length-1);
            return;
        }
        Setimage_index(image_index-1);
    }

    useEffect(() => {
        const next = (image_index + 1) % images_array.length;
        const id = setTimeout(() => Setimage_index(next), 5000);
        return () => clearTimeout(id);
    }, [image_index]); // eslint-disable-line react-hooks/exhaustive-deps

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
                <div className='circles'>
                    <Circle enabled={image_index === 0}/>
                    <Circle enabled={image_index === 1}/>
                    <Circle enabled={image_index === 2}/>
                    <Circle enabled={image_index === 3}/>
                </div>         
            </div>

            <div className='col arrow'  onClick={() => increaseIndex()}>
                <ArrowCircleRight />
            </div>

            </div>        
        </div>
    )
}

export default Carousel;