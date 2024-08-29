import { Icons } from 'assets'
import { Redirect, Tabs } from 'expo-router'
import { SearchBar } from 'features/searchBar'
import { Typography } from 'lib/components'
import { useTranslations } from 'lib/locale'
import { useStore } from 'lib/store'
import { StyleSheet, theme } from 'lib/styles'
import React from 'react'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export const BottomBar: React.FunctionComponent = () => {
    const insets = useSafeAreaInsets()
    const T = useTranslations()
    const { isAuthenticated } = useStore()

    if (!isAuthenticated) {
        return <Redirect href="/auth" />
    }

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: 'red',
                header: ({ route }) => <SearchBar isSearch={route.name === 'search'} />,
                tabBarStyle: {
                    backgroundColor: theme.colors.steel,
                    height: 72 + insets.bottom / 2,
                    paddingTop: insets.bottom / 2,
                },
                tabBarLabelStyle: {
                    display: 'none',
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tab}>
                            <Icons.Home color={focused ? theme.colors.charcoal : theme.colors.white} />
                            <Typography.BottomBarTitle style={{ color: focused ? theme.colors.charcoal : theme.colors.white }}>
                                {T.tabs.home}
                            </Typography.BottomBarTitle>
                        </View>
                    ),
                }}
            />
            <Tabs.Screen
                name="search"
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tab}>
                            <Icons.Search color={focused ? theme.colors.charcoal : theme.colors.white} />
                            <Typography.BottomBarTitle style={{ color: focused ? theme.colors.charcoal : theme.colors.white }}>
                                {T.tabs.search}
                            </Typography.BottomBarTitle>
                        </View>
                    ),
                }}
            />
        </Tabs>
    )
}

const styles = StyleSheet.create(theme => ({
    container: (inset: number) => ({
        height: 72 + inset / 2,
        paddingBottom: inset / 2,
        backgroundColor: theme.colors.steel,
        flexDirection: 'row',
    }),
    tab: {
        alignItems: 'center',
        justifyContent: 'center',
    },
}))
