import { Link } from 'expo-router'
import { Typography } from 'lib/components'
import { useTranslations } from 'lib/locale'
import { Category as CategoryProps } from 'lib/models'
import { StyleSheet } from 'lib/styles'
import React from 'react'
import { ScrollView, View } from 'react-native'
import { CategoryItem } from './CategoryItem'

export const Category: React.FunctionComponent<CategoryProps> = ({
    title,
    items,
}) => {
    const T = useTranslations()

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Typography.CategoryTitle>
                    {title}
                </Typography.CategoryTitle>
                <Link href="/(tabs)/search">
                    <Typography.CategoryMore>
                        {T.home.more}
                    </Typography.CategoryMore>
                </Link>
            </View>
            <ScrollView
                horizontal
                contentContainerStyle={styles.list}
                showsHorizontalScrollIndicator={false}
            >
                {items.map(item => <CategoryItem key={item.title} {...item} />)}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create(theme => ({
    container: {
        gap: theme.gap(2),
        paddingTop: theme.gap(1),
        paddingBottom: theme.gap(2),
        borderBottomWidth: 2,
        borderColor: theme.colors.charcoal,
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: theme.gap(3),
    },
    list: {
        gap: theme.gap(2.5),
        paddingHorizontal: theme.gap(3),
    },
}))
