import React, {useState, useEffect} from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import {tracks} from '../../music/tracks'
import DisplayTrack from '../DisplayTrack'


import {
  IoPlayBackSharp,
  IoPlayForwardSharp,
  IoPlaySkipBackSharp,
  IoPlaySkipForwardSharp,
  IoPlaySharp,
  IoPauseSharp,
} from 'react-icons/io5';



export default function Controls ({audioRef}) {
    const theme = useTheme();
   const [isMusicPlaying, setIsMusicPlaying] = useState(false)

   //handle play pause button
   const handlePlayPause = () => {
    setIsMusicPlaying((track) => !track)
   }

   useEffect(() => {
    if(isMusicPlaying){
        audioRef.current.play()
    }else{
        audioRef.current.pause()
    }
   }, [isMusicPlaying, audioRef])
return(
   

    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <button>
          <IoPlaySkipBackSharp />
        </button>
        <button>
          <IoPlayBackSharp />
        </button>

        <button onClick={handlePlayPause}>
          {isMusicPlaying ? <IoPauseSharp /> : <IoPlaySharp />}
        </button>
        <button>
          <IoPlayForwardSharp />
        </button>
        <button>
          <IoPlaySkipForwardSharp />
        </button>
     </Box>
)
}
