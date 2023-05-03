import anime from 'animejs/lib/anime.es.js';
import React, { useEffect, useRef, useState } from 'react';
import '../../App.css';

const Picture = () => {
  const myRef = useRef(null);
  const myReff = useRef(null);

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    anime({
        targets: myRef.current,
        opacity: 1,
        scale: 1,
        easing: 'easeInOutQuad',
        duration: 1000,
        loop: true,
        direction: 'alternate'
      });

  })
  

  return (
    <div>
      <button onClick={() => setAnimate(true)}>Animate</button>
      <div ref={myReff}>
      <svg id="heart" width="100" height="100">
  <path fill="#ff0000" d="M50,15c13.8,0,25,11.2,25,25c0,10.2-6.2,19-15,22.8c-1.3,0.7-2.7,1.2-4,1.9c-1.3-0.7-2.7-1.2-4-1.9C31.2,59,25,50.2,25,40C25,26.2,36.2,15,50,15z"/>
</svg>

      </div>
      <div ref={myRef}>
        ggjg
        </div>
    </div>
  );
}

export default Picture