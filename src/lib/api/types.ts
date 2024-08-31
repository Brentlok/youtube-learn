export type YoutubeSearchListResponse = {
    kind: string
    etag: string
    nextPageToken: string
    regionCode: string
    pageInfo: {
        totalResults: number
        resultsPerPage: number
    }
    items: Array<YoutubeSearchListItem>
}

type YoutubeSearchListItem = {
    kind: string
    etag: string
    id: {
        kind: string
        videoId: string
    }
    snippet: {
        publishedAt: string
        channelId: string
        title: string
        description: string
        thumbnails: {
            default: {
                url: string
                width: number
                height: number
            }
            medium: {
                url: string
                width: number
                height: number
            }
            high: {
                url: string
                width: number
                height: number
            }
        }
        channelTitle: string
        liveBroadcastContent: string
        publishTime: string
    }
}

export type YoutubeVideoDetails = {
    items: Array<YoutubeVideoDetailsItem>
}

type YoutubeVideoDetailsItem = {
    statistics: {
        viewCount: string
        likeCount: string
    }
    snippet: {
        description: string
    }
}

export type YoutubeVideoChannel = {
    items: Array<YoutubeVideoChannelItem>
}

type YoutubeVideoChannelItem = {
    snippet: {
        thumbnails: {
            [key: string]: {
                url: string
            }
        }
    }
}
