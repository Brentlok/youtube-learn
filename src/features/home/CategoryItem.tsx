import { Typography } from 'lib/components'
import { Video } from 'lib/models'
import { StyleSheet } from 'lib/styles'
import { dateUtils } from 'lib/utils'
import React from 'react'
import { Image, View } from 'react-native'

export const CategoryItem: React.FunctionComponent<Video> = ({
    title,
    date,
    picture,
}) => (
    <View>
        <Image
            source={{ uri: picture }}
            style={styles.picture}
        />
        <Typography.CategoryItemTitle>
            {title}
        </Typography.CategoryItemTitle>
        <Typography.CategoryItemDate>
            {dateUtils.formatDate(date)}
        </Typography.CategoryItemDate>
    </View>
)

const styles = StyleSheet.create(theme => ({
    container: {
        width: 180,
    },
    picture: {
        width: 180,
        height: 112,
        borderRadius: theme.gap(2),
        marginBottom: 5,
    },
}))
