import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { GiftItem } from '../../components/GiftIteam';

describe('GridItem test suit', () => {
    const title = "A title";
    const url = 'http://localhost/image.jpg';

    let wrapper = shallow(<GiftItem title={title} url={url} />);

    test('GridItem snapshot should match', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('GridItem paragraph should contain the title', () => {
        const text = wrapper.find('p').text();
        expect(text.trim()).toBe(title);
    });

    test('img should have src and alt', () => {
        const { src, alt } = wrapper.find('img').props();
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    test('main div should have the right class', () => {
        const { className } = wrapper.find('div').props();
        expect( className ).toBe('card');
    });

});


