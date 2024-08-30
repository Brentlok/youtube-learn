import { StyleSheet } from 'lib/styles'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { VideoPlayer } from './videoPlayer'

export const Details: React.FunctionComponent = () => {
    const [controlsVisible, setControlsVisible] = useState(false)

    return (
        <TouchableOpacity
            activeOpacity={1}
            style={styles.container}
            onPress={() => setControlsVisible(false)}
        >
            <VideoPlayer
                controlsVisible={controlsVisible}
                openControls={() => setControlsVisible(true)}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create(theme => ({
    container: {
        flex: 1,
        paddingTop: theme.gap(8),
        height: '100%',
    },
}))
