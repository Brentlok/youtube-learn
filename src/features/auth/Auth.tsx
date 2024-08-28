import { Logo, VideoIcon } from 'assets'
import { useNavigation, useRouter } from 'expo-router'
import { Button, Typography } from 'lib/components'
import { useTranslations } from 'lib/locale'
import { useStore } from 'lib/store'
import { StyleSheet } from 'lib/styles'
import { Image, View } from 'react-native'

export const Auth = () => {
    const { setIsAuthenticated } = useStore()
    const T = useTranslations()
    const router = useRouter()

    const handleLogin = () => {
        setIsAuthenticated(true)
        router.push('/(tabs)')
    }

    return (
        <View style={styles.container}>
            <Image source={Logo} />
            <View style={styles.videoIconBox}>
                <Image source={VideoIcon} />
            </View>
            <Typography.AuthHeader>
                {T.auth.title}
            </Typography.AuthHeader>
            <Button
                style={styles.loginButton}
                isBig
                onPress={handleLogin}
            >
                {T.auth.login}
            </Button>
            <Typography.AuthTerms>
                {T.auth.byContinuing}
                <Typography.AuthTerms
                    style={styles.links}
                    link="https://example.com/"
                >
                    {T.auth.terms}
                </Typography.AuthTerms>
                {T.auth.and}
                <Typography.AuthTerms
                    style={styles.links}
                    link="https://example.com/"
                >
                    {T.auth.privacy}
                </Typography.AuthTerms>
            </Typography.AuthTerms>
        </View>
    )
}

const styles = StyleSheet.create(theme => ({
    container: {
        paddingHorizontal: theme.gap(4),
        paddingTop: theme.gap(10),
        paddingBottom: theme.gap(7),
        backgroundColor: theme.colors.steel,
        flex: 1,
        alignItems: 'center',
    },
    videoIconBox: {
        paddingVertical: 132,
    },
    loginButton: {
        marginTop: theme.gap(4),
        marginBottom: theme.gap(3),
    },
    links: {
        color: theme.colors.charcoal,
        textDecorationLine: 'underline',
    },
}))
