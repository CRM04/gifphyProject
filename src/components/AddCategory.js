import React, { useState } from 'react';
import propTypes from 'prop-types';


export const AddCategory = ({ setHeroes }) => {
    const [inputValue, setinputValue] = useState('');

    const inputValueChange = (e) => {
        setinputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 1) {
            setHeroes(her => [inputValue, ...her]);
            setinputValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <p> {inputValue} </p>
            <input type="text" value={inputValue} onChange={inputValueChange} ></input>
        </form>
    );

}

AddCategory.propTypes = {
    setHeroes: propTypes.func.isRequired
}

