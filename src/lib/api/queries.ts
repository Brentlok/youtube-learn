import { useQuery } from '@tanstack/react-query'
import { CATEGORIES } from 'features/home/consts'
import { Category, Video } from 'lib/models'
import { fetcher } from './fetcher'
import { QueryKey } from './keys'
import { YoutubeSearchListResponse } from './types'

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
                    items: data.items.map((item): Video => ({
                        title: item.snippet.title,
                        date: new Date(item.snippet.publishedAt),
                        picture: item.snippet.thumbnails.medium.url,
                    })),
                }
            })),
    })
