import { Icons } from 'assets'
import * as Notifications from 'expo-notifications'
import { Toggle, Typography } from 'lib/components'
import { useTranslations } from 'lib/locale'
import { useStore } from 'lib/store'
import { StyleSheet } from 'lib/styles'
import React, { useEffect, useRef } from 'react'
import { Alert, View } from 'react-native'

Notifications.setNotificationHandler({
    // eslint-disable-next-line @typescript-eslint/require-await, require-await
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
    }),
})

export const NotificationsSettings: React.FunctionComponent = () => {
    const T = useTranslations()
    const isMounted = useRef(false)
    const { notificationsEnabled, setNotificationsEnabled } = useStore()

    useEffect(() => {
        if (!isMounted.current) {
            isMounted.current = true

            return
        }

        if (!notificationsEnabled) {
            Notifications.cancelAllScheduledNotificationsAsync()

            return
        }

        Notifications.getPermissionsAsync().then(async ({ status }) => {
            if (status !== 'granted') {
                const res = await Notifications.requestPermissionsAsync()

                if (res.status !== 'granted') {
                    Alert.alert('Error getting notifications permissions')

                    return
                }
            }

            await Notifications.scheduleNotificationAsync({
                trigger: {
                    hour: 12,
                    minute: 0,
                },
                content: {
                    title: T.settings.notification.title,
                    body: T.settings.notification.body,
                },
            })
        })
    }, [notificationsEnabled])

    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Icons.Notification size={36} />
                <Typography.NotificationsTitle>
                    {T.settings.notificationTitle}
                </Typography.NotificationsTitle>
            </View>
            <View style={styles.enable}>
                <Typography.Notification>
                    {T.settings.repeat}
                </Typography.Notification>
                <View style={styles.time}>
                    <Icons.Clock size={24} />
                    <Typography.Notification>
                        12:00
                    </Typography.Notification>
                </View>
                <Toggle
                    checked={notificationsEnabled}
                    onPress={() => setNotificationsEnabled(!notificationsEnabled)}
                />
            </View>
            <Typography.NotificationNote style={styles.note}>
                {T.settings.note}
            </Typography.NotificationNote>
        </View>
    )
}

const styles = StyleSheet.create(theme => ({
    container: {
        paddingTop: theme.gap(1),
        gap: theme.gap(1.5),
    },
    title: {
        gap: theme.gap(1),
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 27,
    },
    enable: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 33,
        paddingRight: 24,
        justifyContent: 'space-between',
    },
    time: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: theme.gap(1),
    },
    note: {
        paddingLeft: 33,
    },
}))
