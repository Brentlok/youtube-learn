import { StyleSheet } from 'lib/styles'
import React from 'react'
import { TouchableOpacity, View } from 'react-native'

type CheckProps = {
    checked: boolean
    onPress: VoidFunction
}

export const Check: React.FunctionComponent<CheckProps> = ({
    checked,
    onPress,
}) => (
    <TouchableOpacity onPress={onPress} style={styles.check}>
        {checked && <View style={styles.checked} />}
    </TouchableOpacity>
)

const styles = StyleSheet.create(theme => ({
    check: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: theme.colors.white,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    checked: {
        backgroundColor: theme.colors.charcoal,
        width: 14,
        height: 14,
        borderRadius: 7,
    },
}))
