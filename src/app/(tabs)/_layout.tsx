import { Tabs } from 'expo-router'
import React from 'react'
import { View } from 'react-native'

const TabLayout: React.FunctionComponent = () => (
    <Tabs
        screenOptions={{
            tabBarActiveTintColor: 'red',
            headerShown: false,
        }}
    >
        <Tabs.Screen
            name="index"
            options={{
                title: 'Home',
                tabBarIcon: () => <View style={{ width: 24, height: 24, backgroundColor: 'red' }} />,
            }}
        />
        <Tabs.Screen
            name="explore"
            options={{
                title: 'Explore',
                tabBarIcon: () => <View style={{ width: 24, height: 24, backgroundColor: 'red' }} />,
            }}
        />
    </Tabs>
)

export default TabLayout
