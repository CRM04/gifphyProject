import { getGifts } from "../../helpers/getGifs";

describe('getGifs test suit', () => {
    
    test('getGifs should return 10 elements', async () => {
        const gifs = await getGifts('Naruto');
        expect(gifs.length).toBe(10);
    });
    
    test('getGifs should return an empty array when argument is an empty string', async () => {
        const gifs = await getGifts('');
        expect(gifs.length).toBe(0);
    });

    test('should return random gifs when no arguments are provided', async() => {
        const gifs = await getGifts();
        expect(gifs.length).toBe(10);
    });

});
