import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import GiftExpertApp from '../../components/GitfExpertApp';


describe('GiftExpertApp test suit', () => {
    
    test('GiftExpertApp should match snapshot', () => {
        const wrapper = shallow(<GiftExpertApp />);
        expect(wrapper).toMatchSnapshot();
    });
    
    test('GiftExpertApp should show a list of categories', () => {
        const categories = ['Naruto', 'Goku'];
        const wrapper = shallow(<GiftExpertApp categories={ categories }/>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GiftGrid').length).toBe(categories.length);
    });
    
});
