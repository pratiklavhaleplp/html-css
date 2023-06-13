import React from "react";
import coloumSize from "../../constants/colSize";
import './styles.css';
import { BiCaretRightSquare } from "react-icons/bi";


const CardContainer = ({ type = '', jsx = [], heading = '', colSize = coloumSize.threeColumns, showIcon = false, image = '' }) => {
    if (image)
        console.log('image details is : ', image);
    switch (type) {
        case 'small': {
            return (
                <div className='card-continer-small'>
                    <p className='sub-heading'>{heading}</p>
                    <>{jsx}</>
                </div>
            );
        }
        case 'medium': {
            return (
                <div className='card-continer-medium'>
                    {image ? <img className='image-width-height' src={image} alt="" /> : <></>}
                    <span><BiCaretRightSquare display={!showIcon ? 'none' : ''} size='30px' /><p className='sub-heading'>{heading}</p></span>
                    <>{jsx}</>
                </div>
            );
        }
        default: {
            return (
                <div className='card-continer-large'>
                    <p className='heading'>{heading}</p>
                    <div className={colSize === 3 ? 'three-columns' : 'two-columns'}>{jsx}</div>
                </div>
            );
        }

    }
}

export default CardContainer;