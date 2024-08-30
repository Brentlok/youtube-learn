import { FlashList } from '@shopify/flash-list'
import { Sort } from 'features/sort'
import { useSearch } from 'lib/api'
import { Error, Typography } from 'lib/components'
import { useTranslations } from 'lib/locale'
import { Video } from 'lib/models'
import { useStore, useStoreEffect } from 'lib/store'
import { StyleSheet, theme } from 'lib/styles'
import React, { useRef } from 'react'
import { Dimensions, View } from 'react-native'
import { SearchItem } from './SearchItem'

export const Search: React.FunctionComponent = () => {
    const T = useTranslations()
    const ref = useRef<FlashList<Video>>(null)
    const { searchQuery, sortBy } = useStore()
    const { data, fetchNextPage, error } = useSearch(searchQuery, sortBy)
    const flattenData = data.pages.flatMap(page => page.items)

    useStoreEffect(({ searchQuery }) => {
        searchQuery
        ref.current?.scrollToOffset({ offset: 0 })
    })

    const handleEndReached = () => {
        if (!searchQuery || data.pages.length === 0) {
            return
        }

        fetchNextPage()
    }

    if (error) {
        return <Error error={error} />
    }

    if (!searchQuery) {
        return (
            <View style={styles.empty}>
                <Typography.CategoryTitle>
                    {T.search.emptyQuery}
                </Typography.CategoryTitle>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            {data.pages.length > 0 && (
                <React.Fragment>
                    <Typography.SearchResults>
                        {data.pages.at(0)?.totalResults} {T.search.searchResults}{' '}
                        <Typography.SearchResults style={{ fontFamily: 'PoppinsSemiBold' }}>“{searchQuery}”</Typography.SearchResults>
                    </Typography.SearchResults>
                    <Sort />
                </React.Fragment>
            )}
            <FlashList
                ref={ref}
                data={flattenData}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                renderItem={({ item }) => <SearchItem {...item} />}
                estimatedItemSize={Dimensions.get('window').width - theme.gap(6)}
                onEndReached={handleEndReached}
                onEndReachedThreshold={0.5}
            />
        </View>
    )
}

const styles = StyleSheet.create(theme => ({
    container: {
        paddingHorizontal: theme.gap(3),
        flex: 1,
    },
    separator: {
        height: theme.gap(3),
    },
    empty: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
}))
