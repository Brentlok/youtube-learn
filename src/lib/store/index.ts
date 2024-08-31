import { SortType } from 'features/sort/type'
import { Note, Video } from 'lib/models'
import { createStore } from 'stan-js'
import { storage } from 'stan-js/storage'

type SavedNoted = Partial<Record<string, Array<Note>>>

export const { useStore, useStoreEffect, reset, actions, getState } = createStore({
    isAuthenticated: false,
    searchQuery: '',
    sortBy: SortType.Popularity,
    currentVideo: null as Video | null,
    get currentNotes() {
        const currentNotes = this.savedNotes[this.currentVideo?.id ?? '']

        return currentNotes ?? []
    },
    savedNotes: storage<SavedNoted>({}),
    displayedTime: '',
    notificationsEnabled: storage(false),
})

export const addNote = (note: string) => {
    actions.setSavedNotes(notes => {
        const { currentNotes, currentVideo, displayedTime } = getState()

        return {
            ...notes,
            [currentVideo?.id ?? '']: [...currentNotes, {
                note,
                timestamp: displayedTime.split(' / ').at(0) ?? '',
            }],
        }
    })
}
