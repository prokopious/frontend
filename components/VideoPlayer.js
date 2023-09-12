"use client"
import ReactPlayer from 'react-player'
import React from 'react'
import styles from './VideoPlayer.module.css'


export default function VideoPlayer({url}) {

    return (
      
            <ReactPlayer controls="true" light="true" url={url} />
       
    )

}