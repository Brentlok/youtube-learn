import { theme } from 'lib/styles'
import React from 'react'
import { Path } from 'react-native-svg'
import { Icon, IconProps } from './Icon'

export const LeftArrow: React.FunctionComponent<IconProps> = ({
    color = theme.colors.charcoal,
    ...props
}) => (
    <Icon {...props}>
        <Path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M28.8 16H3.2m0 0L14.4 4.8M3.2 16l11.2 11.2"
        />
    </Icon>
)
