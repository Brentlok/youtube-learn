import { theme } from 'lib/styles'
import React from 'react'
import { Path } from 'react-native-svg'
import { Icon, IconProps } from './Icon'

export const Search: React.FunctionComponent<IconProps> = ({
    color = theme.colors.charcoal,
    ...props
}) => (
    <Icon {...props}>
        <Path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21.06 21.081 28 28m-4-14c0 5.523-4.477 10-10 10S4 19.523 4 14 8.477 4 14 4s10 4.477 10 10Z"
        />
    </Icon>
)
