/* eslint-disable functional/immutable-data */
import { BroadChurchVideo } from 'assets'
import { StyleSheet } from 'lib/styles'
import React, { useRef, useState } from 'react'
import { TouchableWithoutFeedback, View } from 'react-native'
import { useSharedValue } from 'react-native-reanimated'
import Video, { VideoRef } from 'react-native-video'
import { BottomControls } from './BottomControls'
import { PlayControls } from './PlayControls'
import { TopControls } from './TopControls'

type VideoPlayerProps = {
    controlsVisible: boolean
    openControls: VoidFunction
}

export const VideoPlayer: React.FunctionComponent<VideoPlayerProps> = ({
    controlsVisible,
    openControls,
}) => {
    const [isPlaying, setIsPlaying] = useState(true)
    const ref = useRef<VideoRef>(null)
    const currentTime = useSharedValue(0)
    const duration = useSharedValue(0)

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={openControls}>
                <Video
                    ref={ref}
                    source={BroadChurchVideo}
                    style={styles.video(controlsVisible)}
                    onProgress={event => {
                        currentTime.value = event.currentTime
                    }}
                    onLoad={event => {
                        duration.value = event.duration
                    }}
                />
            </TouchableWithoutFeedback>
            {controlsVisible && (
                <View style={styles.controls}>
                    <TopControls videoRef={ref} />
                    <PlayControls
                        videoRef={ref}
                        setIsPlaying={setIsPlaying}
                        isPlaying={isPlaying}
                    />
                    <BottomControls
                        duration={duration}
                        currentTime={currentTime}
                        videoRef={ref}
                    />
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        width: '100%',
    },
    video: (controlsVisible: boolean) => ({
        width: '100%',
        aspectRatio: 16 / 9,
        opacity: controlsVisible ? 0.5 : 1,
    }),
    controls: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        justifyContent: 'space-between',
        paddingTop: 18,
    },
})
