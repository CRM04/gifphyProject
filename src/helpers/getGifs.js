export const getGifts = async ( category ) => {
    const key = '2nO2kNZ6WnPNfvtHxprOJ2XYzbvVtA80';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${category}&limit=10&offset=0&rating=r&lang=es`;
    const { data } = await fetch(url).then(res => res.json()).catch(console.error);
    // console.info(data);

    const gifs = data.map(gif => {
        return {
            id: gif.id,
            url: gif?.images.downsized.url,
            title: gif.title
        }
    });

    return gifs;
}