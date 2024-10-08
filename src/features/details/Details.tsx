import { useChannelThumbnail } from 'lib/api'
import { Typography } from 'lib/components'
import { STATUS_BAR_HEIGHT } from 'lib/config'
import { useKeyboardAvoiding } from 'lib/hooks'
import { useTranslations } from 'lib/locale'
import { useStore } from 'lib/store'
import { StyleSheet } from 'lib/styles'
import React, { useState } from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import Animated from 'react-native-reanimated'
import { DetailsTab, NotesTab } from './tabs'
import { VideoPlayer } from './videoPlayer'

export const Details: React.FunctionComponent = () => {
    const T = useTranslations()
    const { currentVideo } = useStore()
    const [isDetailsTab, setIsDetailsTab] = useState(true)
    const [controlsVisible, setControlsVisible] = useState(false)
    const { data } = useChannelThumbnail(currentVideo?.channelId ?? '')
    const animatedStyles = useKeyboardAvoiding()

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
            <View style={styles.overflowContainer}>
                <Animated.View style={[animatedStyles, styles.detailsContainer]}>
                    <Typography.DetailsTitle>
                        {currentVideo?.title}
                    </Typography.DetailsTitle>
                    <View style={styles.channel}>
                        {data && (
                            <Image
                                style={styles.channelThumbnail}
                                source={{ uri: data }}
                            />
                        )}
                        <Typography.DetailsChannelName>
                            {currentVideo?.channelName}
                        </Typography.DetailsChannelName>
                    </View>
                    <View style={styles.tabs}>
                        <TouchableOpacity
                            style={styles.tab(isDetailsTab)}
                            onPress={() => setIsDetailsTab(true)}
                        >
                            <Typography.DetailsTab>
                                {T.details.tabs.details}
                            </Typography.DetailsTab>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.tab(!isDetailsTab)}
                            onPress={() => setIsDetailsTab(false)}
                        >
                            <Typography.DetailsTab>
                                {T.details.tabs.notes}
                            </Typography.DetailsTab>
                        </TouchableOpacity>
                    </View>
                    {isDetailsTab ? <DetailsTab /> : <NotesTab />}
                </Animated.View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create(theme => ({
    container: {
        flex: 1,
        paddingTop: STATUS_BAR_HEIGHT,
        height: '100%',
    },
    overflowContainer: {
        flex: 1,
        overflow: 'hidden',
    },
    detailsContainer: {
        paddingTop: theme.gap(2.5),
        paddingHorizontal: theme.gap(2),
        flex: 1,
    },
    channel: {
        flexDirection: 'row',
        paddingLeft: theme.gap(1),
        alignItems: 'center',
        gap: theme.gap(1.5),
        marginTop: theme.gap(1),
        marginBottom: theme.gap(2.5),
    },
    channelThumbnail: {
        ...theme.circle(48),
    },
    tabs: {
        flexDirection: 'row',
    },
    tab: (isActive: boolean) => ({
        paddingTop: theme.gap(1),
        flex: 1,
        gap: 6,
        alignItems: 'center',
        borderBottomWidth: 2,
        borderColor: isActive ? theme.colors.charcoal : theme.colors.steel,
    }),
}))
