import React from 'react';
import './PictureCard.css';

const PictureCard = ({copyright, date, explanation, title, url, hdurl}) => {
    return (
        <div className='pictureCard tc center'>
            <h1 className='dark-blue'>{title}</h1>
            <h2>{date}</h2>
            <div className='picInfo'>
                <a href={hdurl}><img className="br3" alt={`${title}`} src={url}/></a>
                <p className='ba b--dashed pa3'>{explanation}</p>
             </div>
        </div>
    );
}

export default PictureCard;