import { Icons } from 'assets'
import { router } from 'expo-router'
import { StyleSheet, theme } from 'lib/styles'
import React, { useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { VideoRef } from 'react-native-video'

type TopControlsProps = {
    videoRef: React.RefObject<VideoRef>
}

export const TopControls: React.FunctionComponent<TopControlsProps> = ({ videoRef }) => {
    const [isMuted, setIsMuted] = useState(false)

    const handleMute = () => {
        setIsMuted(!isMuted)
        videoRef.current?.setVolume(isMuted ? 1 : 0)
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.iconContainer}
                onPress={() => router.back()}
            >
                <Icons.LeftArrow
                    size={20}
                    color={theme.colors.white}
                />
            </TouchableOpacity>
            <View style={styles.rightContainer}>
                <TouchableOpacity
                    style={styles.iconContainer}
                    onPress={handleMute}
                >
                    <Icons.Volume
                        size={20}
                        color={theme.colors.white}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.iconContainer}
                >
                    <Icons.Airplay
                        size={20}
                        color={theme.colors.white}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create(theme => ({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: theme.gap(2),
    },
    rightContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: theme.gap(1),
    },
    iconContainer: {
        ...theme.circle(32),
        backgroundColor: theme.hexToRgba(theme.colors.black, 0.25),
    },
}))
