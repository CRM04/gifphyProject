import { useState, useEffect } from 'react';
import { getGifts } from '../helpers/getGifs';

export const useFetchGif = (category) => {
    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGifts(category).then(res => {
            console.info(res)
            setstate({
                data: res,
                loading: false
            })
        }).catch(err => {
            console.error(err)
        });
    }, [category]);

    return state;
}