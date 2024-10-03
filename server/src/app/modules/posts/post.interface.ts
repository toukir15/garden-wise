import { Types } from 'mongoose'

export type TPost = {
  sharedAuthorId?: Types.ObjectId
  description?: string
  votes?: Types.ObjectId
  isShared?: boolean
  comments?: Types.ObjectId[]
  share?: string
  isPremium: boolean
  post: {
    userId: Types.ObjectId
    description: string
    images: string[]
    comments: Types.ObjectId[]
    votes: Types.ObjectId
    isPremium: boolean
    category: string
    share: string
  }
}
