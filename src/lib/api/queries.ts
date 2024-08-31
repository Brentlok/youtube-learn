import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import { CATEGORIES } from 'features/home/consts'
import { getSortParam, SortType } from 'features/sort/type'
import { Category, Video } from 'lib/models'
import { fetcher } from './fetcher'
import { QueryKey } from './keys'
import { YoutubeSearchListResponse, YoutubeVideoStatistics } from './types'

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
                return {
                    title: category,
                    items: [],
                }

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
            return {
                items: Array.from({ length: 10 }, (_, index) => ({
                    id: index.toString(),
                    channelName: `test${index.toString()}`,
                    date: new Date(),
                    description: 'test test test',
                    picture: 'https://unsplash.it/340/200?random',
                    title: `test${index.toString()}`,
                    channelId: '',
                })),
                totalResults: 100,
                nextPageToken: Math.random().toString(),
            }

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

export const useVideoStatistics = (videoId: string) =>
    useQuery({
        queryKey: [QueryKey.VideoStatistics, videoId],
        queryFn: async () => {
            return {
                viewCount: 10,
                likeCount: 20,
            }

            const data = await fetcher<YoutubeVideoStatistics>({
                url: '/videos',
                params: {
                    id: videoId,
                    part: 'statistics',
                },
            })

            return data.items.at(0)?.statistics
        },
    })

export const getChannelThumbnail = (channelId: string) => `https://yt3.ggpht.com/ytc/AAUvwn${channelId}=s88`
