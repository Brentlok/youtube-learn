import React from 'react'
import Svg from 'react-native-svg'

export type IconProps = {
    size?: number
    color?: string
    viewBoxWidth?: number
    viewBoxHeight?: number
}

export const Icon: React.FunctionComponent<React.PropsWithChildren<IconProps>> = ({
    size = 32,
    children,
    viewBoxWidth = 32,
    viewBoxHeight = 32,
}) => (
    <Svg
        fill="none"
        width={size}
        height={size}
        viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
    >
        {children}
    </Svg>
)
