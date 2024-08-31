import { router } from 'expo-router'
import { Typography } from 'lib/components'
import { Video } from 'lib/models'
import { useStore } from 'lib/store'
import { StyleSheet } from 'lib/styles'
import { dateUtils } from 'lib/utils'
import React from 'react'
import { Dimensions, Image, TouchableOpacity } from 'react-native'

export const SearchItem: React.FunctionComponent<Video> = video => {
    const {
        title,
        picture,
        date,
        channelName,
    } = video
    const { setCurrentVideo } = useStore()

    const handlePress = () => {
        setCurrentVideo(video)
        router.navigate('/details')
    }

    return (
        <TouchableOpacity onPress={handlePress}>
            <Image
                style={styles.image}
                source={{ uri: picture }}
            />
            <Typography.SearchChannelName>
                {channelName}
            </Typography.SearchChannelName>
            <Typography.SearchVideoTitle style={styles.title}>
                {title}
            </Typography.SearchVideoTitle>
            <Typography.VideoDate>
                {dateUtils.formatDate(date)}
            </Typography.VideoDate>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create(theme => ({
    image: {
        width: Dimensions.get('window').width - theme.gap(6),
        aspectRatio: 1.725,
        marginBottom: theme.gap(2),
        borderRadius: theme.gap(2),
    },
    title: {
        marginVertical: theme.gap(1.5),
    },
}))
