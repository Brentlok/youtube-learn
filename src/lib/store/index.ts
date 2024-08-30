import { SortType } from 'features/sort/type'
import { createStore } from 'stan-js'

export const { useStore, useStoreEffect, reset } = createStore({
    isAuthenticated: true,
    searchQuery: '',
    sortBy: SortType.Popularity,
})
