/* eslint-disable functional/immutable-data */
import { isIOS } from 'lib/config'
import { convertKeyboardEasing } from 'lib/utils'
import { useEffect } from 'react'
import { Keyboard } from 'react-native'
import { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

export const useKeyboardAvoiding = () => {
    const animatedKeyboardHeight = useSharedValue(0)
    const animatedStyles = useAnimatedStyle(() => ({
        transform: [{
            translateY: -animatedKeyboardHeight.value,
        }],
    }))

    useEffect(() => {
        const keyboardListener = Keyboard.addListener(isIOS ? 'keyboardWillShow' : 'keyboardDidShow', event => {
            animatedKeyboardHeight.value = withTiming(event.endCoordinates.height, {
                duration: event.duration,
                easing: convertKeyboardEasing(event.easing),
            })
        })
        const keyboardHideListener = Keyboard.addListener(isIOS ? 'keyboardWillHide' : 'keyboardDidHide', event => {
            animatedKeyboardHeight.value = withTiming(0, {
                duration: event.duration,
                easing: convertKeyboardEasing(event.easing),
            })
        })

        return () => {
            keyboardListener.remove()
            keyboardHideListener.remove()
        }
    }, [])

    return animatedStyles
}
