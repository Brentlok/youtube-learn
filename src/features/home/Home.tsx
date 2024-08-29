import { Category as CategoryType } from 'lib/models'
import React from 'react'
import { ScrollView } from 'react-native'
import { Category } from './Category'

const mock: Array<CategoryType> = [
    {
        title: 'React Native',
        items: [
            {
                date: new Date(),
                title: 'Lorem ipsum dolor sit amet',
                picture: 'https://unsplash.it/180/112?random',
            },
            {
                date: new Date(),
                title: 'Lorem ipsum dolor sit amet2',
                picture: 'https://unsplash.it/180/112?random',
            },
            {
                date: new Date(),
                title: 'Lorem ipsum dolor sit amet1',
                picture: 'https://unsplash.it/180/112?random',
            },
        ],
    },
    {
        title: 'React',
        items: [
            {
                date: new Date(),
                title: 'Lorem ipsum dolor sit amet',
                picture: 'https://unsplash.it/180/112?random',
            },
            {
                date: new Date(),
                title: 'Lorem ipsum dolor sit amet2',
                picture: 'https://unsplash.it/180/112?random',
            },
            {
                date: new Date(),
                title: 'Lorem ipsum dolor sit amet1',
                picture: 'https://unsplash.it/180/112?random',
            },
        ],
    },
    {
        title: 'Typescript',
        items: [
            {
                date: new Date(),
                title: 'Lorem ipsum dolor sit amet',
                picture: 'https://unsplash.it/180/112?random',
            },
            {
                date: new Date(),
                title: 'Lorem ipsum dolor sit amet2',
                picture: 'https://unsplash.it/180/112?random',
            },
            {
                date: new Date(),
                title: 'Lorem ipsum dolor sit amet1',
                picture: 'https://unsplash.it/180/112?random',
            },
        ],
    },
]

export const Home: React.FunctionComponent = () => (
    <ScrollView showsVerticalScrollIndicator={false}>
        {mock.map(category => <Category key={category.title} {...category} />)}
    </ScrollView>
)
