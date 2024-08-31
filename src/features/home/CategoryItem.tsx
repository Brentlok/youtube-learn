import { router } from 'expo-router'
import { Typography } from 'lib/components'
import { Video } from 'lib/models'
import { useStore } from 'lib/store'
import { StyleSheet } from 'lib/styles'
import { dateUtils } from 'lib/utils'
import React from 'react'
import { Image, TouchableOpacity, View } from 'react-native'

export const CategoryItem: React.FunctionComponent<Video> = video => {
    const {
        title,
        date,
        picture,
    } = video
    const { setCurrentVideo } = useStore()
    const handlePress = () => {
        router.navigate('/details')
        setCurrentVideo(video)
    }

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={handlePress}
        >
            <Image
                source={{ uri: picture }}
                style={styles.picture}
            />
            <View style={styles.title}>
                <Typography.CategoryItemTitle numberOfLines={2}>
                    {title}
                </Typography.CategoryItemTitle>
            </View>
            <Typography.VideoDate>
                {dateUtils.formatDate(date)}
            </Typography.VideoDate>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create(theme => ({
    container: {
        width: 180,
    },
    title: {
        flex: 1,
    },
    picture: {
        width: 180,
        height: 112,
        borderRadius: theme.gap(2),
        marginBottom: 5,
    },
}))
