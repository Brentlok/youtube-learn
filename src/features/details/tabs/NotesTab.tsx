import { Button, Typography } from 'lib/components'
import { useTranslations } from 'lib/locale'
import { addNote, useStore } from 'lib/store'
import { StyleSheet, theme } from 'lib/styles'
import React, { useState } from 'react'
import { ScrollView, TextInput, TouchableOpacity, View } from 'react-native'

export const NotesTab: React.FunctionComponent = () => {
    const T = useTranslations()
    const [note, setNote] = useState('')
    const { currentNotes } = useStore()

    const handleAddNote = () => {
        addNote(note)
        setNote('')
    }

    return (
        <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
            <TouchableOpacity activeOpacity={1}>
                <View style={styles.notes}>
                    {currentNotes.map(({ note, timestamp }, index) => (
                        <View key={index} style={styles.note}>
                            <Typography.Note>
                                {note}
                            </Typography.Note>
                            <Typography.NoteTimestamp>
                                {timestamp}
                            </Typography.NoteTimestamp>
                        </View>
                    ))}
                </View>
            </TouchableOpacity>
            <View>
                <TextInput
                    style={styles.input}
                    value={note}
                    onChangeText={setNote}
                    multiline
                    placeholderTextColor={theme.hexToRgba(theme.colors.charcoal, 0.6)}
                    placeholder={T.details.notesTab.enter}
                />
                <Button style={styles.confirm} onPress={handleAddNote}>
                    {T.details.notesTab.add}
                </Button>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create(theme => ({
    container: {
        paddingVertical: theme.gap(3),
        justifyContent: 'space-between',
        flexGrow: 1,
    },
    notes: {
        width: '100%',
    },
    note: {
        width: '100%',
        borderWidth: 1,
        borderColor: theme.colors.gray,
        padding: theme.gap(1.5),
        paddingBottom: theme.gap(.5),
        marginBottom: theme.gap(3),
        borderRadius: theme.gap(1.5),
    },
    input: {
        fontFamily: 'PoppinsRegular',
        fontSize: 12,
        letterSpacing: 0.5,
        borderWidth: 1,
        borderColor: theme.colors.gray,
        borderRadius: theme.gap(1.5),
        padding: theme.gap(1.5),
        marginBottom: theme.gap(2),
        minHeight: 60,
    },
    confirm: {
        maxWidth: 256,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    gap: {
        height: theme.gap(8),
    },
}))
