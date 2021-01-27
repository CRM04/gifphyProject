import React from 'react';
import propTypes from 'prop-types';

export const GiftItem = ({ title, url }) => {

    return (
        <div className="card">
            <img src={url} alt={title} ></img>
            <p> {title} </p>
        </div>
    );
}

GiftItem.prototypes = {
    title: propTypes.string.isRequired,
    url: propTypes.string.isRequired
}