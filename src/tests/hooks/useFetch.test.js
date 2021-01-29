import '@testing-library/jest-dom';
import { renderHook } from '@testing-library/react-hooks';
import { useFetchGif } from '../../hooks/useFetchGift';

describe('useFetchGif hook test suit', () => {

    test('should return the starter state', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGif('Naruto'));
        const { data, loading } = result.current;
        
        await waitForNextUpdate();
        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });

    test('should return an array with gifs', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGif('Naruto'));
        await waitForNextUpdate();

        const { data, loading } = result.current;
        expect(data).toBe(10);
        expect(loading).toBe(false);

    });

});
