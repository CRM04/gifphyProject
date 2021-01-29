import React, { useState } from 'react';
import { AddCategory } from './AddCategory';
import { GiftGrid } from './GiftGrid';

const GiftExpertApp = ( {categories = []} ) => {

    const [Heroes, setHeroes] = useState(categories);

    return (
        <div>
            <h2> GitfExpertApp </h2>
            <AddCategory setHeroes={setHeroes} />
            <hr></hr>
            {Heroes.map(heroe => <GiftGrid heroe={heroe} key={heroe} />)}
        </div>
    );


}

export default GiftExpertApp;