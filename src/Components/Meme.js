import React, { useEffect, useState } from 'react';

const Meme = () => {

    const [memes, setMemes] = useState([]);

    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes').then(res =>
            res.json().then(res => {
                // console.log(res);

                const memes = res.data.memes;
                setMemes(memes);
            }));
    }, [])

    return (
        memes.length ? <img src={memes[0].url} /> : <></>
    );
};

export default Meme;