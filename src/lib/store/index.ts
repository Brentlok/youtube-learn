import { SortType } from 'features/sort/type'
import { Video } from 'lib/models'
import { createStore } from 'stan-js'

export const { useStore, useStoreEffect, reset } = createStore({
    isAuthenticated: true,
    searchQuery: '',
    sortBy: SortType.Popularity,
    currentVideo: null as Video | null,
})
