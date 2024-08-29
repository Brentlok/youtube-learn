import { Icons } from 'assets/index'
import { useTranslations } from 'lib/locale'
import { StyleSheet, theme } from 'lib/styles'
import React, { useState } from 'react'
import { ScrollView, TextInput, TouchableOpacity, View } from 'react-native'

type SearchBarProps = {
    isSearch: boolean
}

export const SearchBar: React.FunctionComponent<SearchBarProps> = ({ isSearch }) => {
    const T = useTranslations()
    const [search, setSearch] = useState('')

    return (
        <ScrollView contentContainerStyle={styles.container} scrollEnabled={false}>
            <View style={styles.inputContainer}>
                <Icons.Search size={24} />
                <TextInput
                    value={search}
                    onChangeText={setSearch}
                    placeholder={T.searchBar.placeholder}
                    style={styles.input}
                    placeholderTextColor={theme.hexToRgba(theme.colors.charcoal, 0.6)}
                />
            </View>
            {!isSearch && (
                <TouchableOpacity>
                    <Icons.Settings />
                </TouchableOpacity>
            )}
        </ScrollView>
    )
}

const styles = StyleSheet.create(theme => ({
    container: {
        paddingHorizontal: theme.gap(3),
        flexDirection: 'row',
        paddingTop: theme.gap(8),
        alignItems: 'center',
        gap: theme.gap(2),
        paddingBottom: theme.gap(3),
    },
    inputContainer: {
        borderWidth: 2,
        borderColor: theme.colors.charcoal,
        borderRadius: theme.gap(2),
        height: 44,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        gap: theme.gap(1.5),
        paddingLeft: theme.gap(1.5),
    },
    input: {
        flex: 1,
        fontFamily: 'PoppinsRegular',
        fontSize: 16,
        letterSpacing: 0.5,
        height: '100%',
    },
}))
