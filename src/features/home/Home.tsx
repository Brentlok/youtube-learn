import { useCategories } from 'lib/api'
import { Error } from 'lib/components'
import React from 'react'
import { ScrollView } from 'react-native'
import { Category } from './Category'

export const Home: React.FunctionComponent = () => {
    const { data, error } = useCategories()

    if (error) {
        return <Error error={error} />
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {data?.map(category => <Category key={category.title} {...category} />)}
        </ScrollView>
    )
}
