import { Icons } from 'assets'
import { StyleSheet, theme } from 'lib/styles'
import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { VideoRef } from 'react-native-video'

type PlayControlsProps = {
    videoRef: React.RefObject<VideoRef>
    setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>
    isPlaying: boolean
}

export const PlayControls: React.FunctionComponent<PlayControlsProps> = ({
    videoRef,
    setIsPlaying,
    isPlaying,
}) => {
    const playToggle = () => {
        setIsPlaying(!isPlaying)
        isPlaying ? videoRef.current?.pause() : videoRef.current?.resume()
    }

    const backward = async () => {
        const current = await videoRef.current?.getCurrentPosition() ?? 0
        videoRef.current?.seek(current - 10)
    }

    const forward = async () => {
        const current = await videoRef.current?.getCurrentPosition() ?? 0
        videoRef.current?.seek(current + 10)
    }

    return (
        <View style={styles.playContainer}>
            <TouchableOpacity
                style={styles.backward}
                onPress={backward}
            >
                <Icons.Forward
                    size={24}
                    color={theme.colors.white}
                />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.play}
                onPress={playToggle}
            >
                {isPlaying
                    ? (
                        <Icons.Pause
                            size={24}
                            color={theme.colors.white}
                        />
                    )
                    : (
                        <Icons.Play
                            size={24}
                            color={theme.colors.white}
                        />
                    )}
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.forward}
                onPress={forward}
            >
                <Icons.Forward
                    size={24}
                    color={theme.colors.white}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create(theme => ({
    playContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: theme.gap(8),
    },
    backward: {
        ...theme.circle(32),
        transform: [{ rotate: '180deg' }],
        backgroundColor: theme.hexToRgba(theme.colors.black, 0.25),
    },
    forward: {
        ...theme.circle(32),
        backgroundColor: theme.hexToRgba(theme.colors.black, 0.25),
    },
    play: {
        ...theme.circle(40),
        backgroundColor: theme.hexToRgba(theme.colors.black, 0.25),
    },
}))
