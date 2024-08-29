import { theme } from 'lib/styles'
import React from 'react'
import { ClipPath, Defs, G, Path } from 'react-native-svg'
import { Icon, IconProps } from './Icon'

export const Person: React.FunctionComponent<IconProps> = ({
    color = theme.colors.charcoal,
    ...props
}) => (
    <Icon {...props}>
        <G clipPath="url(#a)">
            <Path
                fill={color}
                fillRule="evenodd"
                d="M26.5 28.8H5.501c-1.13 0-1.965-1.115-1.538-2.14C5.94 21.916 10.587 19.2 16 19.2c5.414 0 10.06 2.717 12.039 7.46.426 1.025-.409 2.14-1.539 2.14ZM9.467 9.6c0-3.53 2.931-6.4 6.533-6.4 3.603 0 6.533 2.87 6.533 6.4 0 3.53-2.93 6.4-6.533 6.4-3.602 0-6.533-2.87-6.533-6.4Zm22.462 18.618c-1.187-5.375-4.901-9.341-9.79-11.141 2.59-2.044 4.101-5.348 3.546-8.965-.643-4.197-4.207-7.555-8.51-8.045C11.238-.61 6.2 3.918 6.2 9.6c0 3.024 1.43 5.718 3.662 7.477-4.89 1.8-8.603 5.766-9.792 11.14C-.36 30.172 1.246 32 3.286 32h25.427c2.042 0 3.649-1.829 3.216-3.782Z"
                clipRule="evenodd"
            />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M0 0h32v32H0z" />
            </ClipPath>
        </Defs>
    </Icon>
)
