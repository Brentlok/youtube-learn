import { StyleSheet } from 'lib/styles'
import React from 'react'
import { ScrollView, Text } from 'react-native'

export const Search: React.FunctionComponent = () => (
    <ScrollView contentContainerStyle={styles.container}>
        <Text>
            Search
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
