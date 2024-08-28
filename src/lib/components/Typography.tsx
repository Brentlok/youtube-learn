import { StyleSheet } from 'lib/styles'
import { theme } from 'lib/styles'
import { Text, TextStyle } from 'react-native'

enum FontType {
    Regular = 'PoppinsRegular',
    Medium = 'PoppinsMedium',
    SemiBold = 'PoppinsSemiBold',
    Bold = 'PoppinsBold',
}

type TypographyFactoryProps = {
    size: number
    type: FontType
    color?: string
}

type TypographyProps = {
    style?: TextStyle
}

export const typographyFactory = ({
    size,
    color = theme.colors.black,
    type,
}: TypographyFactoryProps): React.FunctionComponent<React.PropsWithChildren<TypographyProps>> => {
    return ({ children, style }) => (
        <Text
            style={{
                fontSize: size,
                fontFamily: type,
                color,
                ...style,
            }}
        >
            {children}
        </Text>
    )
}
