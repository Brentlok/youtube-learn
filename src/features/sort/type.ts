export enum SortType {
    Popularity = 'popularity',
    Date = 'date',
    Rating = 'Rating',
}

export const getSortParam = (sortType: SortType) => {
    switch (sortType) {
        case SortType.Popularity:
            return 'viewCount'
        case SortType.Date:
            return 'date'
        case SortType.Rating:
            return 'rating'
        default:
            return ''
    }
}
