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
    numberOfLines?: number
}

const typographyFactory = ({
    size,
    color = theme.colors.charcoal,
    weight,
    style,
}: TypographyFactoryProps): React.FunctionComponent<React.PropsWithChildren<TypographyProps>> =>
props => (
    <Text
        style={{
            fontSize: size,
            fontFamily: FONT_WEIGHT_MAP[weight],
            color,
            letterSpacing: 0.5,
            ...style,
            ...props.style,
        }}
        numberOfLines={props.numberOfLines}
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
        alignSelf: 'flex-start',
    },
})

export const ButtonText = typographyFactory({
    size: 14,
    color: theme.colors.white,
    weight: 600,
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
})

export const CategoryTitle = typographyFactory({
    size: 18,
    weight: 600,
})

export const CategoryMore = typographyFactory({
    size: 12,
    weight: 400,
    style: {
        textDecorationLine: 'underline',
    },
})

export const CategoryItemTitle = typographyFactory({
    size: 12,
    weight: 500,
})

export const VideoDate = typographyFactory({
    size: 10,
    weight: 400,
    style: {
        lineHeight: 24,
        textAlign: 'right',
    },
})

export const SearchChannelName = typographyFactory({
    size: 12,
    weight: 700,
})

export const SearchVideoTitle = typographyFactory({
    size: 15,
    weight: 400,
})

export const SearchResults = typographyFactory({
    size: 10,
    weight: 400,
})

export const SortTitle = typographyFactory({
    size: 12,
    weight: 400,
    style: {
        textAlign: 'right',
    },
})

export const SortModalTitle = typographyFactory({
    size: 18,
    weight: 600,
    color: theme.colors.white,
})

export const SortModalType = typographyFactory({
    size: 14,
    weight: 400,
    color: theme.colors.white,
})

export const VideoProgress = typographyFactory({
    size: 10,
    weight: 600,
    color: theme.colors.white,
})

export const DetailsTabTitle = typographyFactory({
    size: 10,
    weight: 600,
})

export const DetailsTabDescription = typographyFactory({
    size: 12,
    weight: 400,
})

export const DetailsTabStatistics = typographyFactory({
    size: 10,
    weight: 600,
    color: theme.colors.white,
})

export const DetailsTitle = typographyFactory({
    size: 18,
    weight: 600,
})

export const DetailsChannelName = typographyFactory({
    size: 14,
    weight: 700,
})

export const DetailsTab = typographyFactory({
    size: 12,
    weight: 600,
})

export const Note = typographyFactory({
    size: 12,
    weight: 400,
})

export const NoteTimestamp = typographyFactory({
    size: 10,
    weight: 600,
    style: {
        textAlign: 'right',
    },
})

export const SettingsTitle = typographyFactory({
    size: 16,
    weight: 700,
})

export const SettingsUsername = typographyFactory({
    size: 14,
    weight: 700,
})

export const NotificationsTitle = typographyFactory({
    size: 14,
    weight: 400,
})

export const Notification = typographyFactory({
    size: 12,
    weight: 400,
})

export const NotificationNote = typographyFactory({
    size: 10,
    weight: 600,
})
