import { SortType } from 'features/sort/type'

export const enUs = {
    auth: {
        title: 'Welcome to the best\nYouTube-based learning\napplication.',
        login: 'Log in as guest',
        byContinuing: 'By continuing you agree with\n',
        terms: 'Terms and Conditions',
        and: ' and ',
        privacy: 'Privacy Policy',
    },
    tabs: {
        home: 'Home',
        search: 'Search',
    },
    searchBar: {
        placeholder: 'Search videos',
    },
    home: {
        more: 'Show more',
    },
    search: {
        emptyQuery: 'Search for something...',
        searchResults: 'results found for:',
    },
    components: {
        loader: 'Loading...',
    },
    sort: {
        sortBy: 'Sort by',
        modalTitle: 'Sort records by:',
        confirm: 'Confirm',
        [SortType.Popularity]: 'Most popular',
        [SortType.Date]: 'Upload date: latest',
        [SortType.Rating]: 'Rating: highest',
    },
    details: {
        tabs: {
            details: 'Details',
            notes: 'Notes',
        },
        detailsTab: {
            description: 'Description',
            statistics: 'Statistics',
            views: 'views',
            likes: 'likes',
        },
    },
}
