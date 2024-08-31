import { KeyboardEventEasing } from 'react-native'
import { Easing } from 'react-native-reanimated'

export const convertKeyboardEasing = (easing: KeyboardEventEasing) => {
    switch (easing) {
        case 'easeIn':
            return Easing.in(Easing.ease)
        case 'easeOut':
            return Easing.out(Easing.ease)
        case 'easeInEaseOut':
            return Easing.inOut(Easing.ease)
        case 'linear':
        case 'keyboard':
        default:
            return Easing.linear
    }
}
