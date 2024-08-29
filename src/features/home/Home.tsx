import { StyleSheet } from 'lib/styles'
import React from 'react'
import { ScrollView, Text } from 'react-native'

export const Home: React.FunctionComponent = () => (
    <ScrollView contentContainerStyle={styles.container}>
        <Text>
            Home
        </Text>
    </ScrollView>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})
