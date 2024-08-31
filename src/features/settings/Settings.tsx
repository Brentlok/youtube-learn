import { Icons } from 'assets'
import { router } from 'expo-router'
import { Typography } from 'lib/components'
import { useTranslations } from 'lib/locale'
import { StyleSheet, theme } from 'lib/styles'
import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { NotificationsSettings } from './NotificationsSettings'

export const Settings: React.FunctionComponent = () => {
    const T = useTranslations()

    return (
        <View>
            <View style={styles.container}>
                <View style={styles.backContainer}>
                    <TouchableOpacity onPress={() => router.back()}>
                        <Icons.LeftArrow />
                    </TouchableOpacity>
                    <Typography.SettingsTitle>
                        {T.settings.title}
                    </Typography.SettingsTitle>
                </View>
                <View style={styles.userContainer}>
                    <View style={styles.user}>
                        <Icons.Person color={theme.colors.white} size={20} />
                    </View>
                    <Typography.SettingsUsername>
                        John Doe
                    </Typography.SettingsUsername>
                </View>
            </View>
            <NotificationsSettings />
        </View>
    )
}

const styles = StyleSheet.create(theme => ({
    container: {
        paddingTop: theme.gap(8),
        paddingHorizontal: theme.gap(3),
        paddingBottom: theme.gap(5),
        gap: theme.gap(7),
        borderBottomWidth: 2,
        borderColor: theme.colors.charcoal,
    },
    backContainer: {
        flexDirection: 'row',
        gap: theme.gap(2),
        alignItems: 'center',
    },
    userContainer: {
        flexDirection: 'row',
        gap: theme.gap(1.5),
        alignItems: 'center',
    },
    user: {
        ...theme.circle(48),
        backgroundColor: theme.colors.charcoal,
    },
}))
