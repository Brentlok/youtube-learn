import { Icons } from 'assets'
import { useVideoStatistics } from 'lib/api'
import { Typography } from 'lib/components'
import { useTranslations } from 'lib/locale'
import { useStore } from 'lib/store'
import { StyleSheet, theme } from 'lib/styles'
import React from 'react'
import { View } from 'react-native'

export const DetailsTab: React.FunctionComponent = () => {
    const T = useTranslations()
    const { currentVideo } = useStore()
    const { data } = useVideoStatistics(currentVideo?.id ?? '')

    return (
        <View style={styles.container}>
            <Typography.DetailsTabTitle>
                {T.details.detailsTab.description}
            </Typography.DetailsTabTitle>
            <Typography.DetailsTabDescription style={styles.description}>
                {currentVideo?.description}
            </Typography.DetailsTabDescription>
            <Typography.DetailsTabTitle>
                {T.details.detailsTab.statistics}
            </Typography.DetailsTabTitle>
            <View style={styles.statistics}>
                <View style={styles.statisticsItem}>
                    <Icons.Views
                        color={theme.colors.white}
                        size={20}
                    />
                    <Typography.DetailsTabStatistics>
                        {data?.viewCount} {T.details.detailsTab.views}
                    </Typography.DetailsTabStatistics>
                    <View />
                </View>
                <View style={styles.statisticsItem}>
                    <Icons.Likes
                        color={theme.colors.white}
                        size={20}
                    />
                    <Typography.DetailsTabStatistics>
                        {data?.likeCount} {T.details.detailsTab.likes}
                    </Typography.DetailsTabStatistics>
                    <View />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create(theme => ({
    container: {
        paddingTop: theme.gap(2),
        paddingHorizontal: theme.gap(.5),
    },
    description: {
        marginTop: theme.gap(1),
        marginBottom: theme.gap(2),
    },
    statistics: {
        marginTop: theme.gap(1.5),
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: theme.gap(10),
    },
    statisticsItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: theme.colors.charcoal,
        borderRadius: theme.gap(1),
        height: 32,
        flex: 1,
        paddingHorizontal: theme.gap(1),
    },
}))
