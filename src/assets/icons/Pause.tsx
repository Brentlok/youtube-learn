import { theme } from 'lib/styles'
import React from 'react'
import { Path } from 'react-native-svg'
import { Icon, IconProps } from './Icon'

export const Pause: React.FunctionComponent<IconProps> = ({
    color = theme.colors.charcoal,
    ...props
}) => (
    <Icon {...props}>
        <Path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M13.44 8.218a3.84 3.84 0 1 0-7.68 0v15.36a3.84 3.84 0 1 0 7.68 0V8.218ZM26.24 8.218a3.84 3.84 0 1 0-7.68 0v15.36a3.84 3.84 0 1 0 7.68 0V8.218Z"
        />
    </Icon>
)
