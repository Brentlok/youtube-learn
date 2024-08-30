import { createStore } from 'stan-js'

export const { useStore, useStoreEffect } = createStore({
    isAuthenticated: true,
    searchQuery: '',
})
