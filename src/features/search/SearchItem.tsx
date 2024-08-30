import { Typography } from 'lib/components'
import { Video } from 'lib/models'
import { StyleSheet } from 'lib/styles'
import { dateUtils } from 'lib/utils'
import React from 'react'
import { Dimensions, Image, View } from 'react-native'

export const SearchItem: React.FunctionComponent<Video> = ({
    title,
    picture,
    date,
    channelName,
}) => (
    <View>
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
    </View>
)

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
