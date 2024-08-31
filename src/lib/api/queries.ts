import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import { CATEGORIES } from 'features/home/consts'
import { getSortParam, SortType } from 'features/sort/type'
import { Category, Video } from 'lib/models'
import { fetcher } from './fetcher'
import { QueryKey } from './keys'
import { YoutubeSearchListResponse, YoutubeVideoChannel, YoutubeVideoDetails } from './types'

const getVideosFromResponse = (data: YoutubeSearchListResponse): Array<Video> =>
    data.items.map((item): Video => ({
        id: item.id.videoId,
        title: item.snippet.title,
        date: new Date(item.snippet.publishedAt),
        picture: item.snippet.thumbnails.medium.url,
        channelName: item.snippet.channelTitle,
        description: item.snippet.description,
        channelId: item.snippet.channelId,
    }))

export const useCategories = () =>
    useQuery({
        queryKey: [QueryKey.Categories],
        queryFn: () =>
            Promise.all(CATEGORIES.map(async (category): Promise<Category> => {
                const data = await fetcher<YoutubeSearchListResponse>({
                    url: '/search',
                    params: {
                        q: category,
                        part: 'snippet',
                        maxResults: 5,
                    },
                })

                return {
                    title: category,
                    items: getVideosFromResponse(data),
                }
            })),
    })

type SearchData = {
    items: Array<Video>
    totalResults: number
    nextPageToken: string
}

export const useSearch = (query: string, sortType: SortType) =>
    useInfiniteQuery({
        queryKey: [QueryKey.Search, query, sortType],
        initialData: {
            pages: [] as Array<SearchData>,
            pageParams: [''],
        },
        initialPageParam: '',
        enabled: Boolean(query),
        getNextPageParam: lastPage => lastPage.nextPageToken,
        queryFn: async ({ pageParam }) => {
            const data = await fetcher<YoutubeSearchListResponse>({
                url: '/search',
                params: {
                    q: query,
                    order: getSortParam(sortType),
                    pageToken: pageParam,
                    part: 'snippet',
                    maxResults: 10,
                },
            })

            return {
                items: getVideosFromResponse(data),
                totalResults: data.pageInfo.totalResults,
                nextPageToken: data.nextPageToken,
            }
        },
    })

export const useVideoDetails = (videoId: string) =>
    useQuery({
        queryKey: [QueryKey.VideoStatistics, videoId],
        queryFn: async () => {
            const data = await fetcher<YoutubeVideoDetails>({
                url: '/videos',
                params: {
                    id: videoId,
                    part: 'statistics,snippet',
                },
            })

            return {
                ...data.items.at(0)?.statistics,
                description: data.items.at(0)?.snippet.description,
            }
        },
    })

export const useChannelThumbnail = (channelId: string) =>
    useQuery({
        queryKey: [QueryKey.ChannelThumbnail, channelId],
        queryFn: async () => {
            const data = await fetcher<YoutubeVideoChannel>({
                url: '/channels',
                params: {
                    id: channelId,
                    part: 'snippet',
                },
            })

            return data.items.at(0)?.snippet.thumbnails.default.url
        },
    })
