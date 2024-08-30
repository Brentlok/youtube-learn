import { StyleSheet } from 'lib/styles'
import React from 'react'
import { View } from 'react-native'
import { CategoryTitle } from './Typography'

type ErrorProps = {
    error: globalThis.Error
}

export const Error: React.FunctionComponent<ErrorProps> = ({ error }) => (
    <View style={styles.container}>
        <CategoryTitle>
            {error.message}
        </CategoryTitle>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})
