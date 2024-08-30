import { FlashList } from '@shopify/flash-list'
import { useSearch } from 'lib/api'
import { Error, Typography } from 'lib/components'
import { useTranslations } from 'lib/locale'
import { Video } from 'lib/models'
import { useStore, useStoreEffect } from 'lib/store'
import { StyleSheet, theme } from 'lib/styles'
import React, { useRef } from 'react'
import { Dimensions, ScrollView, View } from 'react-native'
import { SearchItem } from './SearchItem'

export const Search: React.FunctionComponent = () => {
    const T = useTranslations()
    const ref = useRef<FlashList<Video>>(null)
    const { searchQuery } = useStore()
    const { data, fetchNextPage, error } = useSearch(searchQuery)
    const flattenData = data.pages.flatMap(page => page.items)

    useStoreEffect(({ searchQuery }) => {
        searchQuery
        ref.current?.scrollToOffset({ offset: 0 })
    })

    if (error) {
        return <Error error={error} />
    }

    return (
        <ScrollView
            scrollEnabled={false}
            contentContainerStyle={styles.container}
        >
            <Typography.SearchResults>
                {data.pages.at(0)?.totalResults} {T.search.searchResults}{' '}
                <Typography.SearchResults style={{ fontFamily: 'PoppinsSemiBold' }}>“{searchQuery}”</Typography.SearchResults>
            </Typography.SearchResults>
            <FlashList
                ref={ref}
                data={flattenData}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                renderItem={({ item }) => <SearchItem {...item} />}
                estimatedItemSize={Dimensions.get('window').width - theme.gap(6)}
                onEndReached={fetchNextPage}
                onEndReachedThreshold={2}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create(theme => ({
    container: {
        paddingHorizontal: theme.gap(3),
    },
    separator: {
        height: theme.gap(3),
    },
}))
