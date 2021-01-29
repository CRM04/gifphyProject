import React from 'react';
import { useFetchGif } from '../hooks/useFetchGift';
import { GiftItem } from './GiftIteam';
import PropTypes from 'prop-types';

export const GiftGrid = ({ heroe }) => {

    const { data, loading } = useFetchGif(heroe);

    return (
        <>
            <h3 className="animate__animated animate__fadeIn"> {heroe} </h3>
            { loading && <p>Loading... </p> }
            <div className="card-grid animate__animated animate__fadeIn">
                {
                    data.map(gif => <GiftItem {...gif} key={gif.id} />)
                }
            </div>
        </>
    );
}

GiftGrid.propTypes = {
    heroe: PropTypes.string.isRequired
}