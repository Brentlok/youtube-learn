import { Icons } from 'assets/index'
import React from 'react'
import { View } from 'react-native'

const HomeScreen: React.FunctionComponent = () => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Icons.AirplayIcon />
    </View>
)

export default HomeScreen
