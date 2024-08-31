import { StyleSheet } from 'lib/styles'
import React from 'react'
import { TouchableOpacity, View } from 'react-native'

type ToggleProps = {
    checked: boolean
    onPress: VoidFunction
}

export const Toggle: React.FunctionComponent<ToggleProps> = ({
    checked,
    onPress,
}) => (
    <TouchableOpacity
        activeOpacity={1}
        style={styles.container(checked)}
        onPress={onPress}
    >
        <View style={styles.circle(checked)} />
    </TouchableOpacity>
)

const styles = StyleSheet.create(theme => ({
    container: (checked: boolean) => ({
        backgroundColor: checked ? theme.colors.charcoal : theme.colors.steel,
        width: 66,
        height: 36,
        borderRadius: 16,
        justifyContent: 'center',
        paddingHorizontal: theme.gap(.5),
    }),
    circle: (checked: boolean) => ({
        backgroundColor: theme.colors.white,
        ...theme.circle(28),
        alignSelf: checked ? 'flex-end' : 'flex-start',
    }),
}))
