import { ImageStyle, TextStyle, ViewStyle } from 'react-native'
import { Theme, theme } from './theme'

type CommonStyles = ViewStyle | TextStyle | ImageStyle

type Config = {
    [key: string]: CommonStyles | ((...args: Array<any>) => CommonStyles)
}

export const StyleSheet = {
    create: <TConfig extends Config>(styles: TConfig | ((theme: Theme) => TConfig)) => {
        if (typeof styles === 'function') {
            return styles(theme)
        }

        return styles
    },
}

export { theme } from './theme'
