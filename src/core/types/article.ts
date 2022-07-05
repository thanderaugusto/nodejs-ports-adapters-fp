import { Profile } from '@/core/types/profile'
import { Tag } from '@/core/types/tag'

export type User = {
    slug: string
    title: string
    description: string
    body: string
    tagList: Tag[]
    createdAt: string
    updatedAt: string
    favorited: boolean
    favoritedsCount: number
    author: Profile
}

export type Articles = {
    articles: Articles[]
    articlesCount: number
}
