import * as Linking from 'expo-linking'
import { theme } from 'lib/styles'
import { Text, TextStyle } from 'react-native'

const FONT_WEIGHT_MAP = {
    [400]: 'PoppinsRegular',
    [500]: 'PoppinsMedium',
    [600]: 'PoppinsSemiBold',
    [700]: 'PoppinsBold',
}

type TypographyFactoryProps = {
    size: number
    weight: keyof typeof FONT_WEIGHT_MAP
    color?: string
    style?: TextStyle
}

type TypographyProps = {
    style?: TextStyle
    link?: string
}

const typographyFactory = ({
    size,
    color = theme.colors.black,
    weight,
    style,
}: TypographyFactoryProps): React.FunctionComponent<React.PropsWithChildren<TypographyProps>> =>
props => (
    <Text
        style={{
            fontSize: size,
            fontFamily: FONT_WEIGHT_MAP[weight],
            color,
            ...style,
            ...props.style,
        }}
        onPress={props.link ? () => Linking.openURL(props.link ?? '') : undefined}
    >
        {props.children}
    </Text>
)

export const AuthHeader = typographyFactory({
    size: 22,
    color: theme.colors.white,
    weight: 600,
    style: {
        lineHeight: 24,
        letterSpacing: 0.5,
        alignSelf: 'flex-start',
    },
})

export const ButtonText = typographyFactory({
    size: 14,
    color: theme.colors.white,
    weight: 600,
    style: {
        letterSpacing: 0.5,
    },
})

export const AuthTerms = typographyFactory({
    size: 13,
    weight: 400,
    color: theme.colors.white,
    style: {
        textAlign: 'center',
    },
})

export const BottomBarTitle = typographyFactory({
    size: 16,
    weight: 400,
    color: theme.colors.white,
    style: {
        letterSpacing: 0.5,
    },
})
