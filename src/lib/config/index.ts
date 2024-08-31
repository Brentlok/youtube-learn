import Constants from 'expo-constants'
import { Platform } from 'react-native'

export * from './env'
export const isIOS = Platform.OS === 'ios'

export const STATUS_BAR_HEIGHT = Constants.statusBarHeight
