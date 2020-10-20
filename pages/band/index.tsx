import React, {useState} from 'react'
import {useRouter, Router} from 'next/router'
import {route} from 'next/dist/next-server/server/router'
import {getAlbums} from './data';
import {Album} from './model/Album';
import  { keyframes } from 'styled-components'
import styled from '@emotion/styled'
import {
  Box,
  Card,
  Flex,
  Heading,
  Text
} from 'rebass'

import st from './index.module.css';

const CardStyled = styled(Card)`
  position: relative;
  border-radius: 12px;
  color: white;
  will-change: background-color;
  transition: all 1s;
  transform: scale(0.7);
  background-color: skyblue;
  z-index: ${props => props.open ? 99999 : 0};
  :hover {
    background-color: purple;
    transform: scale(1);
  }

`

const breatheAnimation = keyframes`
 0% { top: 0px;}
 50% { top: 82px;}

 100% { top: 0px;}

`

const AbsoluteContent = styled(Box)`
  width: '100%';  
  border-radius: 12px;
  display: flex;
  padding: 8px;
  flex-direction: column;
  color: black;
  font-weight: bold;
  will-change: background-color;
  transition: all 1s;
  transform: scale(0.7);
  background-color: white; 
  border: 4px solid black;
  position: absolute;
  width: 80%;
  z-index: ${props => props.open ? 99999 : 0};
  opacity: ${props => props.open ? 1 : 0};
  animation-name: ${breatheAnimation};
  animation-duration: 3s;
 animation-iteration-count: ${props => props.open ? 'infinite' : 'none'};
`


const AlbumCard = ({album}) => {
  const [open, setOpen] = useState(false);

  const onCardEnter = () => {
    setOpen(true);
  }

  const onCardExit = () => {
    setOpen(false);
  }


  return <><CardStyled open={open} p={4} onMouseEnter={onCardEnter} onMouseLeave={onCardExit}>
    <Heading mb={2}>{album.name}</Heading><Text>
      {album.artist.name}
      </Text>
      <AbsoluteContent open={open}>
    <p>You Had Your Soul With You</p>
    <p>Quiet Light</p>
    <p>Roman Holiday</p>
      </AbsoluteContent>
    </CardStyled>

    </>
}

export default function pid() {
  const albums: Album[] = getAlbums();

  return <Flex flexDirection="column">{ albums.map(a => <AlbumCard album={a}/>)}</Flex>;
}