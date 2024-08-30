import { StyleSheet } from 'lib/styles'
import React from 'react'
import { TouchableOpacity, ViewStyle } from 'react-native'
import { ButtonText } from './Typography'

type ButtonProps = {
    style?: ViewStyle
    onPress: VoidFunction
    isBig?: boolean
    children: string
}

export const Button: React.FunctionComponent<ButtonProps> = ({
    children,
    style,
    onPress,
    isBig,
}) => (
    <TouchableOpacity
        style={{
            ...styles.button(isBig),
            ...style,
        }}
        onPress={onPress}
    >
        <ButtonText style={styles.buttonText(isBig)}>
            {children}
        </ButtonText>
    </TouchableOpacity>
)

const styles = StyleSheet.create(theme => ({
    button: (isBig = false) => ({
        width: '100%',
        height: isBig ? 48 : 32,
        backgroundColor: theme.colors.charcoal,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: isBig ? 12 : 8,
    }),
    buttonText: (isBig = false) => ({
        fontSize: isBig ? 16 : 14,
    }),
}))
