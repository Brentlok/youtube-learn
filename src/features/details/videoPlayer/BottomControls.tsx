import { Icons } from 'assets'
import { Typography } from 'lib/components'
import { useStore } from 'lib/store'
import { StyleSheet, theme } from 'lib/styles'
import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import Animated, { runOnJS, SharedValue, useAnimatedReaction, useAnimatedStyle, useDerivedValue } from 'react-native-reanimated'
import { VideoRef } from 'react-native-video'

type BottomControlsProps = {
    videoRef: React.RefObject<VideoRef>
    currentTime: SharedValue<number>
    duration: SharedValue<number>
}

export const BottomControls: React.FunctionComponent<BottomControlsProps> = ({
    currentTime,
    duration,
    videoRef,
}) => {
    const { displayedTime, setDisplayedTime } = useStore()
    const progress = useDerivedValue(
        () => currentTime.value / duration.value,
        [currentTime, duration],
    )
    const animatedStyles = useAnimatedStyle(() => ({
        width: `${progress.value * 100}%`,
    }))
    const displayTime = useDerivedValue(
        () => {
            const passedMinutes = Math.floor(currentTime.value / 60)
            const passedSeconds = Math.floor(currentTime.value % 60)
            const passed = `${passedMinutes}:${passedSeconds < 10 ? '0' : ''}${passedSeconds}`

            const totalMinutes = Math.floor(duration.value / 60)
            const totalSeconds = Math.floor(duration.value % 60)
            const total = `${totalMinutes}:${totalSeconds < 10 ? '0' : ''}${totalSeconds}`

            return `${passed} / ${total}`
        },
        [currentTime, duration],
    )
    useAnimatedReaction(
        () => runOnJS(setDisplayedTime)(displayTime.value),
        () => displayTime,
        [displayTime],
    )

    const handleFullscreen = () => {
        videoRef.current?.setFullScreen(true)
    }

    return (
        <View style={styles.container}>
            <View style={styles.above}>
                <Typography.VideoProgress>
                    {displayedTime}
                </Typography.VideoProgress>
                <TouchableOpacity onPress={handleFullscreen}>
                    <Icons.Fullscreen
                        size={24}
                        color={theme.colors.white}
                    />
                </TouchableOpacity>
            </View>
            <Animated.View
                style={[styles.progress, animatedStyles]}
            >
                <View style={styles.progressDot} />
            </Animated.View>
        </View>
    )
}

const styles = StyleSheet.create(theme => ({
    container: {
        width: '100%',
    },
    progress: {
        height: 4,
        backgroundColor: theme.colors.red,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    progressDot: {
        ...theme.circle(12),
        backgroundColor: theme.colors.red,
    },
    above: {
        marginBottom: theme.gap(1),
        paddingHorizontal: theme.gap(1),
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    },
}))
