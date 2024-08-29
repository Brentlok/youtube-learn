import { useCategories } from 'lib/api'
import React from 'react'
import { ScrollView } from 'react-native'
import { Category } from './Category'

export const Home: React.FunctionComponent = () => {
    const { data } = useCategories()

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {data?.map(category => <Category key={category.title} {...category} />)}
        </ScrollView>
    )
}
