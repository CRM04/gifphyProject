import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GiftGrid } from '../../components/GiftGrid';
import { useFetchGif } from '../../hooks/useFetchGift';

jest.mock('../../hooks/useFetchGift');

describe('GiftGrid test suit', () => {

    test('Giftgrid should match', () => {
        useFetchGif.mockReturnValue({ data: [], loading: true });
        const wrapper = shallow(<GiftGrid heroe={'Naruto'} />);
        expect(wrapper).toMatchSnapshot();
    });

    test('Should show gifs when using useFetchGifs and hide the loading section', () => {
        const gifs = [{
            id: '1',
            url: 'http://google.com/imagen.jpg',
            title: 'GoogleImage'
        }];

        useFetchGif.mockReturnValue({ data: gifs, loading: false });
        const wrapper = shallow(<GiftGrid heroe="Goku" />);
        expect(wrapper.find('GiftItem').length).toBe(gifs.length);
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper).toMatchSnapshot();
    });

});
