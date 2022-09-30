import React, { useState } from 'react'
import styles from './styles.module.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { useClipboard } from 'use-clipboard-copy';

const MemeGenerated = () => {

    const [copied, setCopied] = useState(false);

    const clipboard = useClipboard();
    const navigate = useNavigate();
    const location = useLocation();
    const url = new URLSearchParams(location.search).get('url');

    const copyLink = () => {
        clipboard.copy(url);
        setCopied(true);
    }


    return (
        <div className={styles.container}>
            <button onClick={() => navigate('/')} className={styles.home}>
                Make More Memes
            </button>
            <button onClick={copyLink} className={styles.copy} type="">
                {copied ? "Link Copied" : "Copy Link"}
            </button>
            {url && <img src={url} />}
        </div>
    )
}

export default MemeGenerated;