import Typography from '@mui/material/Typography';
import anime from 'animejs/lib/anime.es.js';
import React, { useEffect, useRef, useState } from 'react';
import TextTransition, { presets } from 'react-text-transition';


const TEXTS = ['SZA', 'LOVE GALORE'];


export default function Title() {
    const [index, setIndex] = useState(0);
    const myRef = useRef(null);
    const myReff = useRef(null);
    

    useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            3000, // every 3 seconds
          );
          return () => clearTimeout(intervalId);
        }, [])
    return (
        
        <div useRef={myRef}>
                 

        <Typography component="div" variant="h5" className='title'>
        <TextTransition className='title' springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>
        </Typography>
        </div>
    );
  }
  
  
