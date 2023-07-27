import { useState, useEffect } from 'react';
import styles from './Photo.module.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';

interface props {
    style: string
    url: string
    smallUrl?: string
    width?: number
    height?: number
    visibility: string
    delayImgVisibility: () => void
    lazy?: boolean
}

const ImageComponent = ( {style, url, smallUrl, visibility, width, height, delayImgVisibility, lazy = false} : props) => {
    const [imgSrc, setImgSrc] = useState<string | null>(null);
    

    useEffect(() => {
        fetch(url)
        .then(response => response.blob())
        .then(blob => {
            const imageSrc = URL.createObjectURL(blob);
            setImgSrc(imageSrc);
        }).then(() => delayImgVisibility())
        .catch(console.error);
    }, []);

    if (!imgSrc) {
        return null;
    }

    if (lazy) {
        return  <LazyLoadImage className={[styles[style + "on"]].join(" ")} style={{borderRadius: "12px", maxHeight: "320px",
        width: "100%",
        objectFit: "cover",
        transition: "cubicbezier(0.075, 0.82, 0.165, 1)",
        transitionDuration: "1000ms",
        transitionDelay: "0ms",
        overflow: "hidden",
        borderColor: "#d4d4d4",
        borderBottomWidth: "1px",
        borderLeftWidth: "1px",
        borderRightWidth: "1px",
        borderTopWidth: "1px",
        borderStyle: "solid",
        boxShadow: "rgba(0, 0, 0, 0.25) 0px 1px 2px 0px",}} src={imgSrc} alt={style} placeholderSrc={smallUrl} width={width} height={height} effect="blur"></LazyLoadImage> 
    } else {
        return <img src={imgSrc} className={styles[style + visibility]} loading='eager'/>;
    }
};

export default ImageComponent;