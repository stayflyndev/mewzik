import  React, {useRef, useState} from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Controls from "../Controls";
import "../../App.css";
import Container from "@mui/material/Container";
import image from "../../music/CaptainHook.m4a";
import sza from "../../media/sza.jpg";
import Picture from "../Animation";
import Title from "../Title";
import DisplayTrack from "../DisplayTrack";
import {tracks} from '../../music/tracks.js'

export default function MediaControlCard() {
  const [currentTrack, setCurrentTrack] = useState(tracks[0]);
  const audioRef = useRef()

console.log(currentTrack)
  return (
    <Container className="Container">
      <Card sx={{ display: "flex" }} className="Card">
        <Box sx={{ display: "flex", flexDirection: "column" }} display="flex" 
        width={500} height={80} 
        bgcolor="#fff100"
        alignItems="center"
        justifyContent="center"
        marginTop={20}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Title />
          </CardContent>
          <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
            <DisplayTrack currentTrack={currentTrack} audioRef={audioRef}/>
            <Controls audioRef={audioRef}/>
          </Box>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: "auto" }}
          image={sza}
          alt="Live from space album cover"
        />
      </Card>
    </Container>
  );
}
