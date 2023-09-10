"use client"
import ReactPlayer from 'react-player'
import React from 'react'
import styles from './VideoPlayer.module.css'


export default function VideoPlayer() {

    return (
        <div className={styles.videoPlayer}>
            <ReactPlayer width="100%" url='https://www.youtube.com/watch?v=LXb3EKWsInQ' />
        </div>
    )

}