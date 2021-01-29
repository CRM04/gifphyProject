import { shallow } from "enzyme";
import { AddCategory } from '../../components/AddCategory';
import '@testing-library/jest-dom';

describe('AddCategories test suit', () => {

    //this a custom function provided by jest 
    const setHeroes = jest.fn();
    let wrapper = shallow(<AddCategory setHeroes={setHeroes} />);


    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setHeroes={setHeroes} />);
    });


    test('AddCategory snapshot should match', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('input value should change', () => {
        const input = wrapper.find('input');
        const value = 'Hola mundo';
        input.simulate('change', { target: { value } });
        const pText = wrapper.find('p').text().trim();
        expect(pText).toBe(value);
    });


    test('form should not be submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault() { } });
        expect(setHeroes).not.toHaveBeenCalled();
    });


    test('form should have been called', () => {
        const value = 'Hola';
        //simulates events
        wrapper.find('input').simulate('change', { target: { value } });
        wrapper.find('form').simulate('submit', { preventDefault() { } });
        //this test setHeroes have been called at least once, and with a function argument 
        expect(setHeroes).toHaveBeenCalled();
        expect(setHeroes).toHaveBeenCalledTimes(1);
        expect(setHeroes).toHaveBeenCalledWith(expect.any(Function));

        expect(wrapper.find('input').prop('value')).toBe('');
    })

});
