import { StyleSheet } from 'lib/styles'
import React from 'react'
import { Text, View } from 'react-native'

export const Search: React.FunctionComponent = () => (
    <View style={styles.container}>
        <Text>
            Search
        </Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})
